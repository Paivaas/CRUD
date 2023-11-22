'use strict'

async function listarUsuarios (){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    return data
}

async function cadastrarUsuario(usuarios){
    const url = 'http://10.107.140.2:8080/usuarios/'
    const options = {
        method: 'POST',     
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarios)
    }
    const response = await fetch(url, options)
    console.log(response.ok)
    return response.ok
}

async function deletarUsuario(id){
    const url = `http://10.107.140.2:8080/usuarios/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log('DEletouuu')
    return response.ok
}

async function atualizarUsuario(usuarios){
    const url = `http://10.107.140.2:8080/usuarios/${usuarios.id}`
    const options = {
        method: 'PUT',     
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(usuarios)
    }
    const response = await fetch(url, options)
    console.log('alterouu')
    return response.ok

}


// area de teste

// const novoUsuario = {
//     nome: 'Julia Paiva',
//     email: 'Julia@gmail.com'
// }

const usuarioAtualizado = {
    id: '30',
    nome: 'Julia',
    email: 'julia@gmail.com'
}

atualizarUsuario(usuarioAtualizado)
deletarUsuario(6)
cadastrarUsuario()
listarUsuarios()