---
template: "post"
title: [belajar] dua Cara Rendering Data dengan setState ReactJS
cover: "../images/react-js.png"
date: "2019-09-18T08:00:00Z"
slug: "dua-cara-rendering-data-dengan-setstate-reactjs"
keywords: "dua Cara Rendering Data dengan setState ReactJS"
categories: 
    - belajar 
tags:
    - reactjs
---

### Bismillah

Langsung ke sourcecode js nya yah, ini adalah cara pertama melakukan *setState()* dimana kita melakukan binding terhadap fungsi *addSideDish()*.

```javascript

// komponen
const NowEating = props => <h1>{props.meal}</h1>

class Menu extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            meal: "Roti"
        }
        this.addSideDish = this.addSideDish.bind(this)
    }

    // cara#1
    addSideDish() {
        this.setState({
            meal:"Roti dan Kopi"
        })
    }

    // cara#2
    addSideDish() {
        this.setState(prevState => {
            return { meal: `${prevState.meal} dan Kopi`}
        })
    }
    
    render(){
        return(
            <div>
                <NowEating meal={this.state.meal}/>
                {(this.state.meal === "Roti")
                    ? <button onClick={this.addSideDish}>Add side dish</button>
                    : null
                }
            </div>
        )
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('root')
)
```

atau kita bisa membuatkan *fungsi anonymouse* ... source seperti ini:

```javascript
// Komponen
const NowEating = props => <h1>{props.meal}</h1>

class Menu extends React.Component {

    state = { 
        meal: "Roti"
    }

    // membuat function anonimus
    addSideDish = () => {
        this.setState(prevState => {
            return { meal: `${prevState.meal} dan Kopi`}
        })
    }
    
    render(){
        return(
            <div>
                <NowEating meal={this.state.meal}/>
                {(this.state.meal === "Roti")
                    ? <button onClick={this.addSideDish}>Add side dish</button>
                    : null
                }
            </div>
        )
    }
}

ReactDOM.render(
    <Menu />,
    document.getElementById('root')
)
```

yaps kata mentor seterah dah pake teknik yang mana, karena semuanya bisa dilakukan ... have a nice day!