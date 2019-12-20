---
template: "post"
title: [belajar] Rendering Arrays di React JS
cover: "../images/react-js.png"
date: "2019-09-17T13:00:00Z"
slug: "rendering-arrays-di-react-js"
keywords: "Rendering Arrays di React JS"
categories: 
    - belajar 
tags:
    - reactjs
---

### Bismillah

Lagi belajar ReactJS di Lynda.Com, kebetulan sekalian nyatet, sourcecode kurang lebih seperti ini:
```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    </head>
    <div id="root"></div>
    <script type="text/babel">

    // Kita Akan Buat Komponen 'Greeting' dengan functional type ( => )
    const Greetings = () => {
        return [
            <li key="1">Hello</li>,
            <li key="2">John</li>,
            <li key="3">Doe</li>
        ]
    }

    // Rendering value dari komponen Greeting
    ReactDOM.render(
        <Greetings />,
        document.getElementById('root')
    )
    </script>
</html>
```
akan keluar output: 
* Hello
* John
* Doe

```html
<!DOCTYPE html>
<html>
    <head>
        <script src="https://unpkg.com/@babel/standalone/babel.js"></script>
        <script src="https://unpkg.com/react/umd/react.development.js"></script>
        <script src="https://unpkg.com/react-dom/umd/react-dom.development.js"></script>
    </head>
    <div id="root"></div>
    <script type="text/babel">

    // buat array sederhana
    const data = [
        { greeting: "Hello", id: 1 },
        { greeting: "John Doe", id: 2 },
        { greeting: "Again", id: 3 }
    ]

    // komponen gretings
    const Greetings = ({ data }) => {
        return data.map(item => {
            return (
                <li key="{item.id}">{item.greeting}</li>
            )
        })
    }

    ReactDOM.render(
        // Passing Data array ke komponen
        <Greetings data={data} />,
        document.getElementById('root')
    )
    </script>
</html>
```

apa bedanya? silahkan analisa sendiri haha haha haha

have a nice day!