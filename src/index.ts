// src/plugin.ts (部分代码)
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin,
  ILabShell // 导入 ILabShell
} from '@jupyterlab/application';

import { ICommandPalette } from '@jupyterlab/apputils';
// import { /* 其他需要的 imports */ } from '@jupyterlab/xyz';

import { PilotWidget } from './widget'; // 导入我们创建的 Widget

/**
 * Initialization data for the jupyter-pilot extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'jupyter-pilot:plugin', // 保持和你 package.json 中 jupyterlab.discovery.server.base.name 一致或相关
  description: 'An LLM-based autonomous agent for data science tasks in JupyterLab',
  autoStart: true,
  requires: [ILabShell], // 明确需要 ILabShell 服务
  optional: [ICommandPalette], // CommandPalette 是可选的
  activate: (
    app: JupyterFrontEnd,
    labShell: ILabShell, // 接收 ILabShell 实例
    palette?: ICommandPalette // 接收可选的 CommandPalette
  ) => {
    console.log('JupyterLab extension jupyter-pilot is activated!');

    // 1. 创建 PilotWidget 实例
    const pilotWidget = new PilotWidget();

    // 2. 将 Widget 添加到左侧边栏
    // 'left' 表示左侧区域
    // { rank: 200 } 是一个示例排名，数字越小可能越靠上或越下，取决于区域和现有项
    labShell.add(pilotWidget, 'left', { rank: 200 });

    // (可选) 如果需要，可以在这里添加命令到 Command Palette
    if (palette) {
      const command = 'jupyter-pilot:open';
      app.commands.addCommand(command, {
        label: 'Open Jupyter Pilot Panel',
        execute: () => {
          // 这里可以添加逻辑，比如确保面板可见或获得焦点
          labShell.activateById(pilotWidget.id);
        }
      });
      palette.addItem({ command, category: 'Jupyter Pilot' });
    }

    // 你可以在这里返回一个提供者，如果其他插件需要依赖本插件的话
    // return new MyTokenProvider();
  }
};

export default plugin;