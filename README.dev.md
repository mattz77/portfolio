# Development Workflow

Este documento complementa o CLAUDE.md com o fluxo de trabalho para desenvolvimento de features.

## Comandos Disponíveis

### Skills Customizadas

#### `/component <nome>`
Cria um novo componente reutilizável:
```bash
/component Button
```
- Cria componente com TypeScript
- Inclui CVA para variantes
- Gera template de testes
- Exporta no index do ui

#### `/test [tipo] [caminho]`
Executa suite de testes:
```bash
/test                    # Todos os testes
/test unit              # Só unit tests
/test coverage          # Com coverage
/test components/Button # Teste específico
```

#### `/validate [tipo]`
Valida qualidade do código:
```bash
/validate     # Validação completa
/validate quick# Só críticos
/validate lint # Só ESLint
```

#### `/optimize [tipo]`
Otimiza o código:
```bash
/optimize      # Todas otimizações
/optimize bundle# Tamanho do bundle
/optimize deps # Dependências
```

## Fluxo de Feature

### 1. Início
```bash
# Criar task list
/task-create "Nova feature X" "Descrição detalhada"

# Marcar como in progress
/task-update 1 status in_progress
```

### 2. Desenvolvimento
```bash
# Criar componentes necessários
/component Card
/component Modal

# Desenvolver seguindo CLAUDE.md

# Testar enquanto desenvolve
/test components/Card
```

### 3. Validação
```bash
# Validar código
/validate quick

# Rodar todos os testes
/test

# Otimizar se necessário
/optimize
```

### 4. Finalização
```bash
# Marcar como completed
/task-update 1 status completed

# Validar final
/validate
/test coverage
```

## Regras de Ouro

1. **Nenhuma feature sem testes** - 100% de cobertura
2. **Código deve passar ESLint** - Sem warnings
3. **TypeScript strict** - Sem `any`
4. **Component reutilizável** - Seguir patterns do CLAUDE.md
5. **Performance check** - Bundle size otimizado

## Estrutura Recomendada

```
src/components/ui/[component]/
├── ComponentName.tsx    # Componente principal
├── ComponentName.test.tsx # Testes
├── index.ts            # Export barrel
└── [sub-components]/   # Se houver
```

## Exemplo Prático

Criando um novo componente Input:

```bash
# 1. Criar componente
/component Input

# 2. Desenvolver (editar arquivo gerado)
# Seguindo padrões com CVA, TypeScript, etc.

# 3. Testar
/test components/Input

# 4. Validar
/validate lint
/validate typescript

# 5. Otimizar
/optimize component

# 6. Commit com mensagem padrão
git commit -m "feat: add Input component with variants"
```

## Checklist de PR

- [ ] Todos os testes passando
- [ ] ESLint sem warnings
- [ ] TypeScript compilando
- [ ] Componentes reutilizáveis
- [ ] Performance OK
- [ ] Acessibilidade revisada
- [ ] Documentação atualizada