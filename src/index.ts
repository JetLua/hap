import {prompt} from 'inquirer'
import ora from 'ora'
import {copy} from 'fs-extra'
import chalk from 'chalk'
import * as path from 'path'

// prompt([
//   {
//     type: 'list',
//     name: 'framework',
//     message: '选择所使用的框架:',
//     choices: [
//       'React',
//       'Vue',
//       '无'
//     ]
//   },
//   {
//     type: 'list',
//     name: 'eslint',
//     message: '是否启用 ESLint:',
//     choices: ['是', '否']
//   },
//   {
//     type: 'list',
//     name: 'stylelint',
//     message: '是否启用 stylelint:',
//     choices: ['是', '否']
//   },
//   {
//     type: 'input',
//     name: 'name',
//     message: '请输入项目名:',
//     validate: (input: string, answers) => {
//       if (!input.trim()) return
//       return true
//     }
//   },
//   {
//     type: 'input',
//     name: 'author',
//     message: '请输入作者名:',
//     validate: (input: string) => {
//       if (!input.trim()) return
//       return true
//     }
//   }
// ]).then(results => {
//   const render = compileFile('template/vue/package.pug')
//   console.log(render({eslint: true}))
// })

function clone(tpl: 'Vue' | 'React', answers) {
  switch (tpl) {
    case 'Vue': {
      const spinner = ora('正在生成模版').start()
      copy(path.resolve(__dirname, '../template/vue'), process.cwd()).then(() => {
        spinner.stop()
        console.log(chalk.green('✔ 模版生成成功'))
      }).catch(() => {
        spinner.stop()
        console.log(chalk.red('× 模版生成失败'))
      })
      break
    }
  }
}
