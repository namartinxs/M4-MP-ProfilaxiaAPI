# 🦠 API de Profilaxia de Zoonoses

Esta é uma API RESTful desenvolvida como mini projeto do Módulo 4 do curso **Programadores do Amanhã**. O objetivo da aplicação é fornecer informações sobre **profilaxia** (prevenção e tratamento) de doenças como **raiva**, **leptospirose** e **chikungunya**.

A API foi desenvolvida utilizando a arquitetura **MVC (Model-View-Controller)** com foco em organização, clareza e boas práticas de desenvolvimento backend.

---

## 🧰 Tecnologias utilizadas

- Node.js
- Express.js
- JavaScript (ES Modules)
- Arquitetura MVC

---

## 🗂️ Estrutura do Projeto


├── controllers/ 
│ └── tratamentoChikungunya.controller.js 
│ └── prevencaoLepto.controller.js 
│ └── profilaxiaRaiva.controller.js 
│ └── zoonoses.controller.js 
├── models/ 
│   └── utils/
│   | └── enumsRaiva/ 
|   |  └── condutas.js 
|   |  └── observacao.js   
|   |  └── tipoAnimal.js 
|   |  └── tipoExposicao.js 
|   |  └── medidasLeptospirose/
|   |       └── medidasLeptospirose.js
|   |  └── tratamentoChikungunya/
|   |       └── tratamentos.js
|   |  └── zoonososes/
|   │       └── zoonoses.js
|   |└── recomendacao.js    
│ └── tratamentoChikungunya.model.js 
│ └── prevencaoLepto.model.js 
│ └── profilaxiaRaiva.model.js 
│ └── zoonoses.model.js 
|
├── routes/ 
│ └── tratamentoChikungunya.routes.js 
│ └── prevencaoLepto.routes.js 
│ └── profilaxiaRaiva.routes.js 
│ └── zoonoses.routes.js 
|
└── index.js 
├── app.js 
├── package.json 
└── README.md

---

## 📌 Funcionalidades

### ✅ Raiva
- Retorna a **conduta recomendada** baseada no tipo de animal, tipo de exposição e observação.
- Considera exposições diretas, indiretas e sinais clínicos.

### ✅ Leptospirose
- Retorna **medidas de prevenção ambientais e pessoais**.

### ✅ Chikungunya
- Retorna o **tratamento recomendado** de acordo com a fase da doença (aguda ou crônica).

### ✅ Zoonoses
- Retorna dados informativos sobre zoonoses cadastradas pelo nome.

---

## 📨 Rotas disponíveis

### 🔹 Raiva
GET /profilaxiaraiva/avaliarAcidenteRaiva?animal=cao_gato&tipo_exposicao=direto&observacao=passivel_de_observacao

### 🔹 Leptospirose
GET /prevencaoLeptospirose


### 🔹 Chikungunya
GET /tratamentoChikungunya


### 🔹 Zoonoses
GET /zoonoses/:nome

---

## 🧪 Como rodar o projeto

1. Clone o repositório:
```bash
git clone https://github.com/seuusuario/profilaxia-api.git
Instale as dependências:

npm i express
npm i nodemon@1.19.4
npm i swagger-ui-express

Inicie o servidor:
npm start

Acesse via Insomnia/Postman:
http://localhost:3000/

---

## 📄 Documentação:
Acesse a documentação no navegador!
A documentação completa das rotas, parâmetros e exemplos de resposta está disponível no Swagger 
http://localhost:3000/api-docs

