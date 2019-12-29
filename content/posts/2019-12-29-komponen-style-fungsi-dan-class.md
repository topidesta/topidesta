---
template: "post"
title: Menulis Komponen Styling dengan Fungsi atau Kelas
cover: "../images/react-js.png"
date: "2019-12-29T20:40:00Z"
slug: "menulis-komponen-styling-dengan-fungsi-atau-kelas"
keywords: "Menulis Komponen Styling dengan Fungsi atau Kelas"
categories: 
    - belajar
    - share
tags:
    - react
---

## bismillah

sekedar catatan lagi ya, hehe ... jadi di react sendiri di izinkan untuk menuliskan sebuah komponen dalam bentuk *functional* style atau *class* style, lanjutan dari penjelasan tutorial udacity, berikut ini contoh komponen **class style.**

```javascript
/* CLASS STYLE */
class ListContacts extends Component {
    render() {
        // console.log('Props', this.props)
        return(
            <ol className='contact-list'>
                { this.props.contacts.map((contact) => (
                    <li key={contact.id} className="contact-list-item">
                        <div 
                            className="contact-avatar"
                            style={
                                {
                                    backgroundImage: `url(${contact.avatarURL})`
                                }
                            }>
                        </div>
                        <div className="contact-details">
                            <p>{contact.name}</p>
                            <p>{contact.handle}</p>
                        </div>
                        <button className="contact-remove">
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        );
    }
}

export default ListContacts
```

dan kalau **function** style kurang lebih macam ini:

```javascript
/* FUNCTIOANAL STYLE */
function ListContacts(props) {
    return(
        <ol className='contact-list'>
            { props.contacts.map((contact) => (
                <li key={contact.id} className="contact-list-item">
                    <div 
                        className="contact-avatar"
                        style={
                            {
                                backgroundImage: `url(${contact.avatarURL})`
                            }
                        }>
                    </div>
                    <div className="contact-details">
                        <p>{contact.name}</p>
                        <p>{contact.handle}</p>
                    </div>
                    <button className="contact-remove">
                        Remove
                    </button>
                </li>
            ))}
        </ol>
    )
}

export default ListContacts
```

jadi apa bedanya, yaps, perbedaan ada pada pelemparan data, ketika dalam class style, sebuah data masih dalam state (otomatis binding) dengan memanfaatkan keyword global di javascript, yaitu *this* sedangkan dengan memanfaatkan *function* style, data harus ada variabel parameter untuk menampung lemparan data yang belom ter-state (belum binding), kurang lebih itu yang gw fahami.

have a nice day!