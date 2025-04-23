// src/widget.ts
import { ReactWidget } from '@jupyterlab/apputils';

// 导入一个占位符图标 (或者你准备好的自定义图标)
// 可以从 @jupyterlab/ui-components 导入，或者从 @jupyterlab/labicon
import { jupyterIcon } from '@jupyterlab/ui-components'; // 示例：使用 Jupyter 图标
import { PilotPanelComponent } from './components/PilotPanel';

/**
 * The main widget for the Jupyter Pilot extension.
 */
export class PilotWidget extends ReactWidget {
    /**
     * Constructs a new PilotWidget.
     */
    constructor() {
        super();
        this.addClass('jp-PilotWidget'); // 给 Widget 添加 CSS 类名

        // 设置 Widget 的属性
        this.id = 'jupyter-pilot-panel'; // 唯一的 ID
        this.title.label = 'Jupyter Pilot'; // 面板标题 (显示在标签页)
        this.title.caption = 'Jupyter Pilot Assistant'; // 鼠标悬停提示
        this.title.icon = jupyterIcon; // 设置图标 <--- 使用占位符图标
        this.title.closable = true; // 面板是否可关闭
    }

    /**
     * Render the React component into the widget's node.
     */
    render(): JSX.Element {
        return <PilotPanelComponent />;
    }
}