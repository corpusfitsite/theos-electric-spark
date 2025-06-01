
# TH Eletricista - Site Profissional

Site profissional para divulgação dos serviços elétricos de Theobaldo Cordeiro (TH Eletricista).

## 🚀 Tecnologias Utilizadas

- **React 18** - Biblioteca JavaScript para construção da interface
- **TypeScript** - Tipagem estática para maior robustez
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Vite** - Build tool rápida e moderna
- **Shadcn/ui** - Componentes de interface elegantes e acessíveis
- **Lucide React** - Ícones modernos e consistentes
- **Docker** - Containerização para deploy

## 📋 Funcionalidades

- ✅ **Landing Page Responsiva** - Design adaptável para todos os dispositivos
- ✅ **Seção de Serviços** - Apresentação completa dos serviços oferecidos
- ✅ **Sobre o Profissional** - Informações sobre Theobaldo Cordeiro
- ✅ **Galeria de Projetos** - Showcase dos trabalhos realizados
- ✅ **Formulário de Contato** - Solicitação de orçamentos
- ✅ **Informações de Contato** - Telefone, WhatsApp, e-mail
- ✅ **Design Profissional** - Visual moderno e confiável
- ✅ **SEO Otimizado** - Meta tags e estrutura semântica

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ e npm
- Git

### Instalação

```bash
# Clone o repositório
git clone <URL_DO_REPOSITORIO>
cd th-eletricista

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:5173`

## 🐳 Docker

### Build e execução com Docker

```bash
# Build da imagem
docker build -t th-eletricista .

# Execução do container
docker run -p 3000:80 th-eletricista
```

### Usando Docker Compose

```bash
# Desenvolvimento
docker-compose up th-eletricista-dev

# Produção
docker-compose up th-eletricista
```

## 📦 Deploy

### Build para produção

```bash
npm run build
```

Os arquivos de produção serão gerados na pasta `dist/`.

### Deploy com Docker

O projeto está configurado para deploy usando Docker com Nginx. O Dockerfile multi-stage otimiza o tamanho da imagem final.

## 🎨 Personalização

### Cores

As cores principais podem ser alteradas no arquivo `tailwind.config.ts`:

- **Primária**: Azul profissional (#1E40AF)
- **Secundária**: Amarelo/dourado (#F59E0B)
- **Neutras**: Tons de cinza

### Conteúdo

Para atualizar informações de contato, serviços ou textos:

1. **Informações de Contato**: Edite os componentes `ContactSection.tsx` e `Footer.tsx`
2. **Serviços**: Modifique o array `services` em `ServicesSection.tsx`
3. **Sobre**: Atualize o conteúdo em `AboutSection.tsx`
4. **Projetos**: Edite o array `projects` em `GallerySection.tsx`

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- 📱 Mobile (320px+)
- 📱 Tablet (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Wide Desktop (1280px+)

## 🔧 Scripts Disponíveis

```bash
npm run dev        # Servidor de desenvolvimento
npm run build      # Build de produção
npm run preview    # Preview do build
npm run lint       # Verificação de código
```

## 📞 Contato

**TH Eletricista - Theobaldo Cordeiro**

- 📱 Telefone/WhatsApp: (11) 99999-9999
- 📧 E-mail: contato@theletricista.com
- 📍 Localização: São Paulo - SP
- 🕒 Horário: Segunda a Sexta, 7h às 18h
- 🚨 Emergências: 24 horas

---

Desenvolvido com ⚡ para oferecer a melhor experiência ao cliente.
