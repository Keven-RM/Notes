import React, {useState} from 'react'
import "./styles/styles.css"

export default function App(){
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState('');

    function MakeNewNote(e){
        e.preventDefault();
        if(content !== ""){
            setNotes([...notes, {conteudo: content, id: notes.length}]);
            console.log(notes);
        }else{
            alert('Digite um valor valido')
        }
        
        document.querySelector('#input').value = "";
    }

    function Removeitem(array, id) {
        return () => {
            setNotes(array.filter(function(el) { 
                return el.id !== id; 
            })
            )
        }
    }

    return(
    <>
    <section>
        <h1>Nova nota</h1>
        <>
        <form>
            <input type="text" placeholder="conteúdo" onChange={ event => setContent(event.target.value)} id="input" />
            <button type="submit" onClick={MakeNewNote} className="new-note">Criar nota</button>
        </form>
        </>
    </section>

    <ul>        
        {notes.map((item, i)=>(
            <li key={i}>
                <header>
                    <button onClick={Removeitem(notes, item.id)}><i class="fas fa-times"></i></button>
                </header>
                <p>{item.conteudo}</p>
            </li>
        ))
        }
    </ul>
    </> 
    )

}