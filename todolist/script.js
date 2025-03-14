

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

function carregarNotas() {
    let notas = JSON.parse(localStorage.getItem('notas')) || [];
    notas.forEach(nota => adicionarNotaNaLista(nota));
}

// Atualizar localStorage
function atualizarLocalStorage() {
    let notas = [];
    document.querySelectorAll('#notas li').forEach(li => {
        let texto = li.querySelector('p').textContent;
        let concluida = li.querySelector('p').style.textDecoration === "line-through";
        notas.push({ texto, concluida });
    });
    localStorage.setItem('notas', JSON.stringify(notas));
}

// Remover nota do localStorage
function removerNotaDoLocalStorage(texto) {
    let notas = JSON.parse(localStorage.getItem('notas')) || [];
    notas = notas.filter(nota => nota.texto !== texto);
    localStorage.setItem('notas', JSON.stringify(notas));
}

document.querySelector('#add').addEventListener('click', adicionarnota)

