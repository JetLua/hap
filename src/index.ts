import {prompt} from 'inquirer'
import {compileFile} from 'pug'

prompt([
  {
    type: 'list',
    name: 'framework',
    message: '选择所使用的框架:',
    choices: [
      'React',
      'Vue',
      'Svelte',
      '无'
    ]
  },
  {
    type: 'list',
    name: 'eslint',
    message: '是否启用 ESLint:',
    choices: ['是', '否']
  },
  {
    type: 'list',
    name: 'stylelint',
    message: '是否启用 stylelint:',
    choices: ['是', '否']
  },
  {
    type: 'input',
    name: 'name',
    message: '请输入项目名:',
    validate: (input: string, answers) => {
      if (!input.trim()) return
      return true
    }
  },
  {
    type: 'input',
    name: 'author',
    message: '请输入作者名:',
    validate: (input: string) => {
      if (!input.trim()) return
      return true
    }
  }
]).then(results => {
  const render = compileFile('template/vue/package.pug')
  console.log(render({eslint: true}))
})
