
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
- **Nginx** - Servidor web otimizado para produção

## 📋 Funcionalidades

- ✅ **Landing Page Responsiva** - Design adaptável para todos os dispositivos
- ✅ **Seção de Serviços** - Apresentação completa dos serviços oferecidos
- ✅ **Sobre o Profissional** - Informações sobre Theobaldo Cordeiro
- ✅ **Galeria de Projetos** - Showcase dos trabalhos realizados
- ✅ **Formulário de Contato** - Solicitação de orçamentos
- ✅ **Informações de Contato** - Telefone, WhatsApp, e-mail
- ✅ **Design Profissional** - Visual moderno e confiável
- ✅ **SEO Otimizado** - Meta tags e estrutura semântica
- ✅ **Performance Otimizada** - Lazy loading, compressão, cache
- ✅ **Segurança** - Headers de segurança configurados

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ e npm
- Git
- Docker (opcional)

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

O site estará disponível em `http://localhost:8080`

## 🐳 Docker

### Build e execução com Docker

```bash
# Build da imagem
docker build -t th-eletricista .

# Execução do container
docker run -p 8080:8080 th-eletricista
```

### Usando Docker Compose

```bash
# Desenvolvimento
docker-compose up th-eletricista-dev

# Produção
docker-compose up th-eletricista
```

## 🌐 Deploy no Render

### Deploy Automático

1. **Conecte seu repositório GitHub ao Render:**
   - Acesse [render.com](https://render.com)
   - Clique em "New +" → "Web Service"
   - Conecte sua conta GitHub
   - Selecione este repositório

2. **Configurações do Deploy:**
   - **Environment**: `Docker`
   - **Build Command**: `docker build -t th-eletricista .`
   - **Start Command**: `docker run -p 8080:8080 th-eletricista`
   - **Port**: `8080`

3. **Variáveis de Ambiente:**
   ```
   NODE_ENV=production
   ```

4. **Deploy automático:**
   - Ative "Auto-Deploy" para deploys automáticos a cada push
   - O site será acessível em: `https://seu-app.onrender.com`

### Deploy Manual

```bash
# Build para produção
npm run build

# Build da imagem Docker
docker build -t th-eletricista .

# Deploy usando Render CLI (opcional)
render deploy
```

### Configuração com render.yaml

O projeto inclui um arquivo `render.yaml` para configuração automática:

```yaml
services:
  - type: web
    name: th-eletricista
    env: docker
    dockerfilePath: ./Dockerfile
    plan: free
    healthCheckPath: /health
```

## 📦 Otimizações de Performance

- **Compressão Gzip** - Reduz tamanho dos arquivos
- **Cache Headers** - Otimiza carregamento de assets
- **Code Splitting** - Carregamento otimizado de chunks
- **Minificação** - Reduz tamanho dos arquivos finais
- **Lazy Loading** - Carrega componentes sob demanda

## 🔒 Segurança

- **Content Security Policy** - Previne ataques XSS
- **Security Headers** - Headers de segurança configurados
- **HTTPS Redirect** - Redirecionamento automático para HTTPS
- **User não-root** - Container executa com usuário limitado

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

## 🚀 Monitoramento

- **Health Check**: Endpoint `/health` para verificação de status
- **Logs**: Logs estruturados para debugging
- **Error Handling**: Páginas de erro personalizadas

## 📞 Contato

**TH Eletricista - Theobaldo Cordeiro**

- 📱 Telefone/WhatsApp: (11) 99999-9999
- 📧 E-mail: contato@theletricista.com
- 📍 Localização: São Paulo - SP
- 🕒 Horário: Segunda a Sexta, 7h às 18h
- 🚨 Emergências: 24 horas

---

## 📋 Checklist de Deploy

- ✅ Dockerfile otimizado para produção
- ✅ Nginx configurado com headers de segurança
- ✅ Health check endpoint configurado
- ✅ Compressão Gzip habilitada
- ✅ Cache de assets configurado
- ✅ Build otimizado com code splitting
- ✅ Docker Compose para desenvolvimento e produção
- ✅ Configuração Render.yaml incluída
- ✅ .dockerignore para builds eficientes
- ✅ Documentação completa de deploy

Desenvolvido com ⚡ para oferecer a melhor experiência ao cliente.
