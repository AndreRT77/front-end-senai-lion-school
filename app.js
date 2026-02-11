'use strict'

export async function Cursos() {
    const url = 'https://lion-school-phbo.onrender.com/cursos'
    const response = await fetch(url)
    const cursos = await response.json()
    return cursos
}

export async function Alunos() {
    const url = `hhtps://lion-school-phbo.onrender.com/cursos`
    const response = await fetch(url)
    const alunos = await response.json()
    return alunos
}
