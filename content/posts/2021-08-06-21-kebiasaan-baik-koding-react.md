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
return <Navbar showTitle={true} />

// Good
return <Navbar showTitle />
```

2. Gunakan Logika Ternary

```javascript
// Bad
const { role } = user

if (role === ADMIN) {
  return <AdminUser />
} else {
  return <NormalUser />
}

// Good
const { role } = user
return role === ADMIN ? <AdminUser /> : <NormalUser />
```

3. Manfaatkan Object Literal

```javascript
// Bad
const { role } = user

switch (role) {
  case ADMIN:
    return <AdminUser />
  case EMPLOYEE:
    return <EmployeeUser />
  case USER:
    return <NormalUser />
}

// Good
const { role } = user

const components = {
  ADMIN: AdminUser,
  EMPLOYEE: EmployeeUser,
  USER: NormalUser,
}

const Component = components[role]
return <Componenent />
```

4. Gunakan Fragments

```javascript
// Bad
return (
  <div>
    <Component1 />
    <Component2 />
    <Component3 />
  </div>
)

// Good
return (
  <>
    <Component1 />
    <Component2 />
    <Component3 />
  </>
)
```

5. Tidak membuat sebuah Function di dalam Render

```javascript
// Bad
return (
  <button onClick={() => dispatch(ACTION_TO_SEND_DATA)}>
    {' '}
    // NOTICE HERE This is a bad example
  </button>
)

// Good
const submitData = () => dispatch(ACTION_TO_SEND_DATA)

return <button onClick={submitData}>This is a good example</button>
```

6. Gunakan Memo

```javascript
// Bad
import React, { useState } from 'react'

export const TestMemo = () => {
  const [userName, setUserName] = useState('faisal')
  const [count, setCount] = useState(0)

  const increment = () => setCount(count => count + 1)

  return (
    <>
      <ChildrenComponent userName={userName} />
      <button onClick={increment}> Increment </button>
    </>
  )
}

const ChildrenComponent = ({ userName }) => {
  console.log('rendered', userName)
  return <div> {userName} </div>
}
// Good
import React, { useState } from 'react'

const ChildrenComponent = React.memo(({ userName }) => {
  console.log('rendered')
  return <div> {userName}</div>
})
```

7. Gunakan Tag Javascript untuk CSS

```javascript
// Bad
.body {
  height: 10px;
}
return <div className='body'></div>

// Good
const bodyStyle = {
  height: "10px"
}

return <div style={bodyStyle}></div>
```

8. Gunakan Object Destructure

```javascript
// Bad
return (
  <>
    <div> {user.name} </div>
    <div> {user.age} </div>
    <div> {user.profession} </div>
  </>
)

// Good
const { name, age, profession } = user

return (
  <>
    <div> {name} </div>
    <div> {age} </div>
    <div> {profession} </div>
  </>
)
```

9. String Tidak Perlu Kurung Kurawal

```javascript
// Bad
return <Navbar title={'My Special App'} />

// Good
return <Navbar title="My Special App" />
```

10. Jangan Gunakan kode JS di JSX

```javascript
// Bad
return (
  <ul>
    {posts.map(post => (
      <li
        onClick={event => {
          console.log(event.target, 'clicked!') // <- THIS IS BAD
        }}
        key={post.id}
      >
        {post.title}
      </li>
    ))}
  </ul>
)

// Good
const onClickHandler = event => {
  console.log(event.target, 'clicked!')
}

return (
  <ul>
    {posts.map(post => (
      <li onClick={onClickHandler} key={post.id}>
        {post.title}
      </li>
    ))}
  </ul>
)
```

11. Gunakan Template Literal

```javascript
// Bad
const userDetails = user.name + "'s profession is" + user.proffession

return <div> {userDetails} </div>

// Good
const userDetails = `${user.name}'s profession is ${user.proffession}`

return <div> {userDetails} </div>
```

12. Import sesuaikan Urutan

```javascript
// Bad
import React from 'react'
import ErrorImg from '../../assets/images/error.png'
import styled from 'styled-components/native'
import colors from '../../styles/colors'
import { PropTypes } from 'prop-types'

// Good

//Built-in
import React from 'react'

// Internal/ Komponent
import { PropTypes } from 'prop-types'
import styled from 'styled-components/native'

// Eksternal/ Assets
import ErrorImg from '../../assets/images/error.png'
import colors from '../../styles/colors'
```

13. Gunakan **implicit** returnya

```javascript
// Bad
const add = (a, b) => {
  return a + b
}

// Good
const add = (a, b) => a + b
```

Todo ....

source: http://go.topidesta.my.id/21-best-practice-reactjs
