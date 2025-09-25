// Funciones que comparten registro.js y login.js
export function validarCorreo(correo) {
    const dominiosPermitidos = ['@duocuc.cl', '@profesor.duoc.cl', '@gmail.com'];
    return dominiosPermitidos.some(dominio => correo.toLowerCase().endsWith(dominio));
}

export function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
}

export function usuarioExiste(email) {
    const usuarios = obtenerUsuarios();
    return usuarios.some(user => user.email === email);
}

export function buscarUsuarioPorEmail(email) {
    const usuarios = obtenerUsuarios();
    return usuarios.find(user => user.email === email);
}