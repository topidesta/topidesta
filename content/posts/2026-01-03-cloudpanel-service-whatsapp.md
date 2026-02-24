---
template: "post"
title: CloudPanel Untuk Service Whatsapp
cover: "../images/cloudpanel.png"
date: "2026-01-03T08:00:00Z"
slug: "cloudpanel-untuk-service-whatsapp"
keywords: "cloudpanel, whatsapp"
categories:
  - share
tags:
  - cloudpanel
  - whatsapp
---

## Bismillah

Ini postingan pertama di tahun 2026. Semoga bisa konsisten untuk update blog ini. hehe, aamiin.

> CloudPanel adalah panel kontrol hosting open-source yang ringan dan mudah digunakan. CloudPanel mendukung PHP, Node.js, Python, dan Ruby. CloudPanel juga mendukung MySQL, PostgreSQL, dan MongoDB. CloudPanel juga mendukung Redis, Memcached, dan RabbitMQ. CloudPanel juga mendukung Docker, Kubernetes, dan OpenShift. CloudPanel juga mendukung Let's Encrypt, Cloudflare, dan Google Cloud DNS. CloudPanel juga mendukung Fail2ban, ModSecurity, dan Nginx.

Itulah yang didapat dari Penjelasan di Website CloudPanel. Sekarang gw akan bahas, apa yang gw manfaatin dari cloudpanel ini, karena sebelumnya pake aaPanel terlalu overkill menurut gw kalo cuman buat service whatsapp.
Pada postingan sebelumnya gw pernah nulis tentang [configurasi server](/membangun-server-ubuntu-aapanel) dan [configurasi whatsapp](/un-official-whatsapp-api), silahkan dibaca karena disana secara detail gw jelaskan.

Untuk Postingan kali ini gw akan bahas tentang install cloudpanel dan configurasi cloudpanel untuk service whatsapp, dengan memanfaatkan teknologi docker. Berikut Ini langkah yang harus dilakukan. Ini spek server yang gw pake.

![spek-server](../images/spek-server.png)

Untuk install cloudpanel bisa mengikuti tutorial di [website resminya](https://www.cloudpanel.io/docs/v2/introduction/)

### Update Server Dahulu

Sesuaikan dengan OS Masing masing, kali ini gw pake Server Debian 13 yang terkenal ringan.

### Install CloudPanel

Jika proses install berhasil, maka bisa dilanjut untuk install docker, kali ini gw pake [Dockge](https://github.com/louislam/dockge) sebagai interface untuk mengelola docker yang ringan.

## Install Dockge

Untuk install dockge bisa mengikuti tutorial di [website resminya](https://github.com/louislam/dockge/blob/master/README.md)

![dockge](../images/dockge.png)

Dah selesai ... untuk service whatsapp, gw pake 8 service yang opensource. Berikut ini adalah service yang gw pake:

1. [Baileys-API](https://go.topidesta.my.id/v1) ❌
2. [WPP-Connect](https://go.topidesta.my.id/v2) ❌
3. [Wa-Gateway](https://go.topidesta.my.id/v3) ✅
4. [Wuzz-API](https://go.topidesta.my.id/v4-4) ✅
5. [wwebjs-api](https://go.topidesta.my.id/v4-3) ❌
6. [Evolution-API](https://go.topidesta.my.id/v6) ❌
7. [Go-Whatsapp-Device](https://go.topidesta.my.id/v6-3) ✅
8. [Chattery-API](https://go.topidesta.my.id/v7-3) ✅

Dari beberapa service diatas, gw cuman pake yang 3,4,7,8 yang berjalan di dockge-cloudpanel. Ups, ada bonus neh docker compose yang gw pake.

<details>
  <summary> 👇 Klik Detail</summary>

```bash
# docker-compose.yaml
services:
  wa-gateway:
    container_name: wa-gateway
    restart: unless-stopped
    image: mimamch/wa-gateway:latest
    volumes:
      - ./wa_credentials:/app/wa_credentials
      - ./media:/app/media
    ports:
      - 5001:5001
    environment:
      - KEY=changeyoursupersecretkey
```

```bash
# docker-compose.yaml
services:
  wuzapi-server:
    build:
      context: .
      dockerfile: Dockerfile
    ports:
      - ${WUZAPI_PORT:-8080}:8080
    environment:
      - WUZAPI_ADMIN_TOKEN=${WUZAPI_ADMIN_TOKEN}
      - WUZAPI_GLOBAL_ENCRYPTION_KEY=${WUZAPI_GLOBAL_ENCRYPTION_KEY}
      - WUZAPI_GLOBAL_HMAC_KEY=${WUZAPI_GLOBAL_HMAC_KEY:-}
      - WUZAPI_GLOBAL_WEBHOOK=${WUZAPI_GLOBAL_WEBHOOK:-}
      - DB_USER=${DB_USER:-wuzapi}
      - DB_PASSWORD=${DB_PASSWORD:-wuzapi}
      - DB_NAME=${DB_NAME:-wuzapi}
      - DB_HOST=db
      - DB_PORT=${DB_PORT:-5432}
      - TZ=${TZ:-America/Sao_Paulo}
      - WEBHOOK_FORMAT=${WEBHOOK_FORMAT:-json}
      - SESSION_DEVICE_NAME=${SESSION_DEVICE_NAME:-WuzAPI}
      # RabbitMQ configuration Optional
      - RABBITMQ_URL=amqp://wuzapi:wuzapi@rabbitmq:5672/
      - RABBITMQ_QUEUE=whatsapp_events
    depends_on:
      db:
        condition: service_healthy
      rabbitmq:
        condition: service_healthy
    networks:
      - wuzapi-network
    restart: on-failure
  db:
    image: postgres:16
    environment:
      POSTGRES_USER: ${DB_USER:-wuzapi}
      POSTGRES_PASSWORD: ${DB_PASSWORD:-wuzapi}
      POSTGRES_DB: ${DB_NAME:-wuzapi}
    # ports:
    #   - "${DB_PORT:-5432}:5432" # Uncomment to access the database directly from your host machine.
    volumes:
      - db_data:/var/lib/postgresql/data
    networks:
      - wuzapi-network
    healthcheck:
      test:
        - CMD-SHELL
        - pg_isready -U ${DB_USER:-wuzapi}
      interval: 5s
      timeout: 5s
      retries: 5
    restart: always
  rabbitmq:
    image: rabbitmq:3-management
    hostname: rabbitmq
    environment:
      RABBITMQ_DEFAULT_USER: wuzapi
      RABBITMQ_DEFAULT_PASS: wuzapi
      RABBITMQ_DEFAULT_VHOST: /
    ports:
      - 5672:5672 # AMQP port
      - 15672:15672 # Management UI port
    volumes:
      - rabbitmq_data:/var/lib/rabbitmq
    networks:
      - wuzapi-network
    healthcheck:
      test:
        - CMD
        - rabbitmq-diagnostics
        - ping
      interval: 10s
      timeout: 5s
      retries: 5
    restart: always
networks:
  wuzapi-network:
    driver: bridge
volumes:
  db_data: null
  rabbitmq_data: null
```

```bash
# docker-compose.yaml
services:
  evolution-api:
    image: evoapicloud/evolution-api:latest
    restart: always
    # Menambahkan dependency agar API tidak jalan sebelum DB & Redis siap
    depends_on:
      evolution-postgres:
        condition: service_healthy
      evolution-redis:
        condition: service_started
    volumes:
      - evolution-instances:/evolution/instances
    # Membuka port agar bisa diakses (sesuaikan jika perlu port lain)
    ports:
      - 5010:8080
    environment:
      - SERVER_URL=${SERVER_URL}
      - AUTHENTICATION_TYPE=${AUTHENTICATION_TYPE}
      - AUTHENTICATION_API_KEY=${AUTHENTICATION_API_KEY}
      - AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES=${AUTHENTICATION_EXPOSE_IN_FETCH_INSTANCES}
      - LANGUAGE=${LANGUAGE}
      - CONFIG_SESSION_PHONE_CLIENT=${CONFIG_SESSION_PHONE_CLIENT}
      - CONFIG_SESSION_PHONE_NAME=${CONFIG_SESSION_PHONE_NAME}
      - TELEMETRY=${TELEMETRY}
      - DATABASE_ENABLED=${DATABASE_ENABLED}
      - DATABASE_PROVIDER=${DATABASE_PROVIDER}
      - DATABASE_CONNECTION_URI=${DATABASE_CONNECTION_URI}
      - DATABASE_SAVE_DATA_INSTANCE=${DATABASE_SAVE_DATA_INSTANCE}
      - DATABASE_SAVE_DATA_NEW_MESSAGE=${DATABASE_SAVE_DATA_NEW_MESSAGE}
      - DATABASE_SAVE_MESSAGE_UPDATE=${DATABASE_SAVE_MESSAGE_UPDATE}
      - DATABASE_SAVE_DATA_CONTACTS=${DATABASE_SAVE_DATA_CONTACTS}
      - DATABASE_SAVE_DATA_CHATS=${DATABASE_SAVE_DATA_CHATS}
      - DATABASE_SAVE_DATA_LABELS=${DATABASE_SAVE_DATA_LABELS}
      - DATABASE_SAVE_DATA_HISTORIC=${DATABASE_SAVE_DATA_HISTORIC}
      - CACHE_REDIS_ENABLED=${CACHE_REDIS_ENABLED}
      - CACHE_REDIS_URI=${CACHE_REDIS_URI}
      - CACHE_REDIS_PREFIX_KEY=${CACHE_REDIS_PREFIX_KEY}
      - CACHE_REDIS_SAVE_INSTANCES=${CACHE_REDIS_SAVE_INSTANCES}
  evolution-postgres:
    image: postgres:16-alpine
    restart: always
    volumes:
      - evolution-postgres-data:/var/lib/postgresql/data
    environment:
      - POSTGRES_DB=${POSTGRES_DATABASE}
      - POSTGRES_USER=${POSTGRES_USERNAME}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    # Healthcheck memastikan database benar-benar siap menerima koneksi
    healthcheck:
      test:
        - CMD-SHELL
        - pg_isready -U ${POSTGRES_USERNAME} -d ${POSTGRES_DATABASE}
      interval: 10s
      timeout: 5s
      retries: 5
  evolution-redis:
    image: redis:alpine
    restart: always
    command: redis-server --appendonly yes # Menambah persistensi data
    volumes:
      - evolution-redis-data:/data
volumes:
  evolution-instances: null
  evolution-postgres-data: null
  evolution-redis-data: null
networks: {}
```

```bash
# docker-compose.yaml
version: "3.8"
services:
  chatery:
    build:
      context: .
      dockerfile: Dockerfile
    container_name: chatery-whatsapp-api
    restart: unless-stopped
    ports:
      - ${PORT:-3000}:3000
    environment:
      - NODE_ENV=production
      - PORT=3000
      - CORS_ORIGIN=${CORS_ORIGIN:-*}
      - DASHBOARD_USERNAME=${DASHBOARD_USERNAME:-admin}
      - DASHBOARD_PASSWORD=${DASHBOARD_PASSWORD:-admin123}
      - API_KEY=${API_KEY:-}
    volumes:
      # Persist WhatsApp sessions
      - chatery_sessions:/app/sessions
      # Persist received media files
      - chatery_media:/app/public/media
      # Persist message store
      - chatery_store:/app/store
    healthcheck:
      test:
        - CMD
        - wget
        - --no-verbose
        - --tries=1
        - --spider
        - http://localhost:3000/
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 10s
    logging:
      driver: json-file
      options:
        max-size: 10m
        max-file: "3"
    networks:
      - chatery-network
volumes:
  chatery_sessions:
    driver: local
  chatery_media:
    driver: local
  chatery_store:
    driver: local
networks:
  chatery-network:
    driver: bridge
```

</details>

Jangan lupa buat `.env` file juga ya. sesuaikan dengan object yang dibutuhkan.

Done ya, Have a nice day!

Sumber:

1. https://www.cloudpanel.io/docs/v2/getting-started/
2. https://www.bitdoze.com/cloudpanel-setup-dockge/
3. https://youtu.be/BuoyvbDVBe0?si=9TjpFIPqZm3WkvZX
