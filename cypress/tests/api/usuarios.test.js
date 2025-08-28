import Login from "../../support/requests/Login"
import Usuarios from "../../support/requests/Usuarios"
import { faker } from '@faker-js/faker'

describe('Test **/API /usuarios', () => {
  let token;

  beforeEach(() => {
    // const payload = {
    //   email: 'joaovandrade30@gmail.com',
    //   password: 'CcO21377@',
    // }

    // Login.postLogin(payload).then(response => {
    //   token = response.body.authorization
    // })
  })

  context('Listar usuários', () => {
    it('Listar todos usuários', () => {
      Usuarios.getUsuarios().then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('usuarios')
        expect(response.body).to.have.property('quantidade')
      })
    })
  
    it('Listar um único usuário', () => {
      let usuarioId = '0L5lq3Nm2CI802Vq'
  
      Usuarios.getUsuario(usuarioId).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.property('nome')
        expect(response.body).to.have.property('email')
        expect(response.body).to.have.property('password')
        expect(response.body).to.have.property('administrador')
        expect(response.body).to.have.property('_id')
      })
    })
  
    it('Buscar um usuário que não existe', () => {
      let usuarioId = 'A7K9X2M4P8Q1R6T5'
  
      Usuarios.getUsuario(usuarioId).then(response => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq('Usuário não encontrado')
      })
    })
  })

  context('Cadastrar usuário', () => {
    it('Cadastrar usuário com sucesso', () => {
      const payload = {
        nome: "Fulano da Silva",
        email: faker.internet.email().toLowerCase(),
        password: "teste",
        administrador: "true"
      }

      Usuarios.postUsuarios(payload).then(response => {
        expect(response.status).to.eq(201)
        expect(response.body).to.have.property('message')
        expect(response.body).to.have.property('_id')
      })
    })

    it('Tentar cadastrar usuário com email já cadastrado', () => {
      const payload = {
        nome: "Fulano da Silva",
        email: 'joaovandrade30@outlook.com',
        password: "teste",
        administrador: "true"
      }

      Usuarios.postUsuarios(payload).then(response => {
        console.log(response)
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq("Este email já está sendo usado")
      })
    })
  })

  context('Editar usuário', () => {
    let id
    
    beforeEach(() => {
      const payload = {
        nome: "Fulano da Silva",
        email: faker.internet.email().toLowerCase(),
        password: "teste",
        administrador: "true"
      }

      Usuarios.postUsuarios(payload).then(response => {
        id = response.body._id
      })
    })

    it('Editar usuário com sucesso', () => {
      const payload = {
        nome: "Fulano da Silva",
        email: faker.internet.email().toLowerCase(),
        password: "teste",
        administrador: "true"
      }

      Usuarios.putUsuario(payload, id).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro alterado com sucesso')
      })
    })

    it('Tentar editar para um email que já existe', () => {
      const payload = {
        nome: "Fulano da Silva",
        email: 'joaovandrade30@outlook.com',
        password: "teste",
        administrador: "true"
      }

      Usuarios.putUsuario(payload, id).then(response => {
        expect(response.status).to.eq(400)
        expect(response.body.message).to.eq('Este email já está sendo usado')
      })
    })
  })

  context('Excluir usuário', () => {
    let id

    beforeEach(() => {
      const payload = {
        nome: "Fulano da Silva",
        email: faker.internet.email().toLowerCase(),
        password: "teste",
        administrador: "true"
      }

      Usuarios.postUsuarios(payload).then(response => {
        id = response.body._id
      })
    })

    it('Deletar um usuário com sucesso', () => {
      Usuarios.delUsuario(id).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Registro excluído com sucesso')
      })
    })

    it('Tentar deletar um usuário que não existe', () => {
      id = 'A7K9X2M4P8Q1R6T5'

      Usuarios.delUsuario(id).then(response => {
        expect(response.status).to.eq(200)
        expect(response.body.message).to.eq('Nenhum registro excluído')
      })
    })
  })
})