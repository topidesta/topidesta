---
template: 'post'
title: 21 Kebiasan Baik Koding ReactJS
cover: '../images/react-js.png'
date: '2021-08-06T10:00:00Z'
slug: '21-kebiasaan-baik-koding-reactjs'
keywords: '21 Kebiasan Koding ReactJS'
categories:
  - trick
tags:
  - reactjs
  - medium
---

Bismillah

Entah kadang "Kebiasan Buruk" selalu terulang karena kita jarang membaca Updatenyah hehe, berikut ini 21 kebiasan yang diantarnya pernah gw alami.
Langsung ajah berikut ini 21 Kebiasan Programmer ReactJS, terutama gw sendiri hehe.

1. Gunakan JSX 
```javascript
// Bad
return (
  <Navbar showTitle={true} />
);
// Good
return(
  <Navbar showTitle />  
)
```

2. Gunakan Logika Ternary
```javascript
// Bad
const { role } = user;

if(role === ADMIN) {
  return <AdminUser />
}else{
  return <NormalUser />
}

// Good
const { role } = user;

return role === ADMIN ? <AdminUser /> : <NormalUser />
```

3. Manfaatkan Object Literal
```javascript
// Bad
const {role} = user

switch(role){
  case ADMIN:
    return <AdminUser />
  case EMPLOYEE:
    return <EmployeeUser />
  case USER:
    return <NormalUser />
}

// Good
const {role} = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser
};

const Component = components[role];

return <Componenent />;
```

todo...

hehe

source: https://betterprogramming.pub/21-best-practices-for-a-clean-react-project-df788a682fb