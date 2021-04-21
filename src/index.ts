import {prompt} from 'inquirer'
import ora from 'ora'
import {copy} from 'fs-extra'
import chalk from 'chalk'
import * as path from 'path'

const frameworks = ['React', 'Vue', '无'] as const

prompt<IAnswers>([
  {
    type: 'list',
    name: 'framework',
    message: '选择所使用的框架:',
    choices: frameworks
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
  console.log(results)
})

function clone(tpl: 'Vue' | 'React', answers?: IAnswers) {
  const spinner = ora('正在生成模版').start()
  copy(
    path.resolve(__dirname, '../template/vue'),
    process.cwd(),
    {
      filter: (...args) => {
        console.log(args)
        return true
      }
    }
  ).then(() => {
    spinner.stop()
    console.log(chalk.green('✔ 模版生成成功'))
  }).catch(() => {
    spinner.stop()
    console.log(chalk.red('× 模版生成失败'))
  })
}

// clone('React')

interface IAnswers {
  framework: typeof frameworks[number]
}
