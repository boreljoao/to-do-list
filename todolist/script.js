

function adicionarnota(event) {
    event.preventDefault();




    ul = document.getElementById('notas')
    conteudo = document.querySelector('#mensagem')

    if(conteudo.value.trim() !== ""){
        
        let li = document.createElement('li')
        

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('btn');
        deleteBtn.classList.add('btn-danger');
        deleteBtn.textContent = 'Del';
        
        deleteBtn.addEventListener('click', function() {
        ul.removeChild(li);
        });

        const rig = document.createElement('button')
        rig.classList.add('btn')
        rig.classList.add('btn-success')
        rig.textContent = '✓'
        rig.addEventListener('click', ()=>{
            if(p.style.textDecoration == ""){
                p.style.textDecoration = "line-through"
            } else{
                p.style.textDecoration = ""
            }
            
        })

        let p = document.createElement('p')
        p.textContent = conteudo.value

        
        
        li.appendChild(rig)
        li.appendChild(p)
        ul.appendChild(li)
        li.appendChild(deleteBtn);
        conteudo.value = "";
    } else{
        return 0
    }
}


document.querySelector('#add').addEventListener('click', adicionarnota)

