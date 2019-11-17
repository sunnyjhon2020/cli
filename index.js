#!/usr/bin/env node

const newTerminal = require('./terminal_tab');
const program = require('commander');
const fs = require('fs');
const chalk = require('chalk');
const end_points = require('./end_points');
const countLogger = require('./change_count_log');

program
  .version('1.0.0')
  .description(chalk.greenBright('one stop solution to build the fyle app'));

program 
  .command('app')
  .alias('a')
  .description(chalk.red('to build the fyle app local'))
  .action(() => {
    newTerminal.open('cd fyle-baap && bash start.sh', () => {
      newTerminal.open('cd fyle-app && bash run.sh', () => {
        newTerminal.open('cd fyle-app && source setup.sh && cd main && gulp && gulp watch', () => {
          newTerminal.open('cd fyle-app && source setup.sh && cd accounts && gulp && gulp watch', () => {
            newTerminal.open('cd fyle-app && source setup.sh && cd settings && gulp && gulp watch', () => {
              newTerminal.open('cd fyle-app && source setup.sh && cd router && gulp && gulp watch', () => {
                newTerminal.open('cd fyle-sharedjs && bash run.sh', () => {
                  newTerminal.open('cd fyle-sharedjs && gulp watch', () => {
                    console.log(chalk.green('App build started'));
                  })
                })
              })
            })
          })
        })
      });
    });
  });

program
  .command('staging-to-root')
  .alias('s2r')
  .description(chalk.red('will change endpoint\'s staging to ROOT'))
  .action(() => {
    end_points.files.forEach((file) => {
      fs.readFile(file, 'utf8', function(err, data) {
        let maindata;
        let changeCount = 0;
        if (err) {
          console.log(err);
        }
        maindata = data;
        end_points.api_map.forEach((map) => {
          end_points[map].forEach((item) => {
            if (maindata.indexOf(item.text) > -1) {
              changeCount++;
            }
            maindata = maindata.replace(item.text, item.textToReplace);            
          });
        });
        countLogger(file, changeCount);
        fs.writeFileSync(file, maindata, 'utf8', (err)=> {
          if (err) throw err;
        });
      });
    });
  });

program
  .command('root-to-staging')
  .alias('r2s')
  .description(chalk.red('will change endpoint\'s ROOT to staging'))
  .action(() => {
    end_points.files.forEach((file) => {
      fs.readFile(file, 'utf8', function(err, data) {
        let maindata;
        let changeCount = 0;
        if (err) {
          console.log(err);
        }
        maindata = data;
        end_points.api_map.forEach((map) => {
          end_points[map].forEach((item) => {
            if (maindata.indexOf(item.textToReplace) > -1) {
              changeCount++;
            }
            maindata = maindata.replace(item.textToReplace, item.text);            
          })
        });
        countLogger(file, changeCount);
        fs.writeFile(file, maindata, 'utf8', (err)=> {
          if (err) throw err;
        });
      });
    });
  });
  
program.parse(process.argv);