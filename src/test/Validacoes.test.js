import Validacoes from "../services/Validacoes.js";

test("Validar se o nome tem pelo menos 3 caracteres.", ()=>{
    expect(Validacoes.validaNome("Mel")).toBe(true)
});


test("Verificar se o nome tem menos de 3 caracteres.", ()=>{
    expect(Validacoes.validaNome("Bu")).toBe(false)
});


test("Validar se o número de telefone tem 11 dígitos", ()=>{
    expect(Validacoes.validaTelefone("12345678900")).toBe(true)
});

test("Verificar se o número de telefone só tem caracteres tipo numero", ()=>{
    expect(Validacoes.validaTelefone("1234567890a")).toBe(false)
});

test("Verificar se o número de telefone tem menos de 11 digitos", ()=>{
    expect(Validacoes.validaTelefone("123456789")).toBe(false)
});

test("Verificar se a entrada de status é valida",()=>{
    expect(Validacoes.validaStatus('finalizada' || 'andamento' || 'a fazer')).toBe(true)
});



