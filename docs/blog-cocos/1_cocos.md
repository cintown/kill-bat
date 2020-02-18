# 第一章：快速上手

## 一. 资源管理器

### 1. assets 资源
只有这个目录下的资源才会被 `Cocos Creator` 导入项目并进行管理

* 声音文件，一般为 `mp3` 文件，我们将在主角跳跃和得分时播放名为 `jump` 和 `score` 的声音文件。
* 位图字体，由 fnt 文件和同名的 `png` 图片文件共同组成。位图字体（`Bitmap Font`） 是一种游戏开发中常用的字体资源，详情请阅读 位图字体资源
* 各式各样的缩略图标，这些都是图像资源，一般是 `png` 或 `jpg` 文件。图片文件导入项目后会经过简单的处理成为 `texture` 类型的资源。之后就可以将这些资源拖拽到场景或组件属性中去使用了

#### 1.1 Scene 场景
* 选中 assets 目录，确保我们的场景会被创建在这个目录下
* 新建场景文件 -> `New Scene` -> 重命名为 `game`
* 双击 `game`，就会在 场景编辑器 和 层级管理器 中打开这个场景

#### 1.2 Canvas 画布
* 打开场景后， 层级管理器 中会显示当前场景中的所有节点和他们的层级关系。
* 新建的场景中只有一个名叫 `Canvas` 的节点，`Canvas` 可以被称为画布节点或渲染根节点。
* 点击选中 `Canvas`，可以在 属性检查器 中看到他的属性

### 1.3 scripts 脚本
1. `cc` 是 Cocos 的简称，Cocos 引擎的主要命名空间，引擎代码中所有的类、函数、属性和常量都在这个命名空间中定义
2.  组件（`Component`），他们能够挂载到场景中的节点上，提供控制节点的各种功能
3. Cocos Creator 规定一个节点具有的属性都需要写在 `properties` 代码块中，这些属性将规定主角的移动方式
4. 把 Player 组件添加到主角节点上
    * 在 层级管理器 中选中 主角(应同名为Player) 节点
    * 属性检查器 中点击 `添加组件` 按钮
    * 选择 用户脚本组件 -> Player
    * 成功为主角节点添加 Player 组件
5. Action 动作
    1. moveBy() -> 在规定的时间内移动指定的一段距离
        * 参数一：定义主角属性中的跳跃时间
        * 参数二：Vec2（表示 2D 向量和坐标）类型的对象
        * 参数三：如果参数二为number类型，那么需要参数三，这个参数的含义分别表示x和y坐标
        * 注意：传入的 X、Y 坐标都是相对于节点当前的坐标位置，而不是整个坐标系的绝对坐标
        * 返回：`ActionInterval` 类型的对象 -> 表示时间间隔动作的类，这种动作在一定时间内完成
    2. easing() -> 可以让时间间隔动作呈现为一种缓动运动
        * 参数：一个缓动对象
        * 返回：`ActionInterval` 类型的对象
        * 缓动 [API](https://docs.cocos.com/creator/api/zh/modules/cc.html#easecubicactionout)
        * 缓动动作可参考下方图示<br>
        
        ![1-4](https://s2.ax1x.com/2020/02/04/1BnAwF.md.png) 

    3. onLoad -> 会在场景加载后立刻执行，所以我们会把初始化相关的操作和逻辑都放在这里面
        * 初始化键盘输入监听<br>
        ```javascript
        // Player.js
        onLoad: function () {
            ...
            // 初始化键盘输入监听
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
            cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);   
        },
        
        ...
        
        onKeyDown (event) {
            // set a flag when key pressed
            switch(event.keyCode) {
                case cc.macro.KEY.a:
                    this.accLeft = true;
                    break;
                case cc.macro.KEY.d:
                    this.accRight = true;
                    break;
            }
        },
    
        onKeyUp (event) {
            // unset a flag when key released
            switch(event.keyCode) {
                case cc.macro.KEY.a:
                    this.accLeft = false;
                    break;
                case cc.macro.KEY.d:
                    this.accRight = false;
                    break;
            }
        },
        ```
        
        * cocos 中通过 `systemEvent` 来监听系统 全局 事件
        
    4. update: function (dt) -> update 在场景加载后就会每帧调用一次，我们一般把需要经常计算或及时更新的逻辑内容放在这里
    
    5. `properties`中的属性常用参数
        * `default`：设置属性的默认值，这个默认值仅在组件第一次添加到节点上时才会用到
        * `type`：限定属性的数据类型，详见 [CCClass 进阶参考：type 参数](https://docs.cocos.com/creator/manual/zh/scripting/reference/class.html#type-%E5%8F%82%E6%95%B0)
        * `visible`：设为 false 则不在属性检查器面板中显示该属性
        * `serializable`： 设为 false 则不序列化（保存）该属性
        * `displayName`：在属性检查器面板中显示成指定名字
        * `tooltip`：在属性检查器面板中添加属性的 tooltip
        
    6. this.ground.height/2 -> 获取地面属性高度的一半（地面的锚点是地面中心点，锚点加上地面一半的高度才是地面上表面的高度位置）
    
    7. cc.instantiate() ->  克隆指定的任意类型的对象，或者从 Prefab 实例化出新节点，返回值为 Node 或者 Object
    
    8. this.node.addChild() -> 将新节点建立在该节点的下一级，所以新节点的显示效果在该节点之上
    
    9. setPosition() -> 设置节点在父节点坐标系中的位置
        * 两个参数 -> 数值 x 和 y
        * 一个参数 -> 传入 cc.v2(x, y)（类型为 cc.Vec2 的对象）
        
    10. 通过 Node 下的 getComponent 方法可以得到该节点上挂载的组件引用
    
    11. `this.node.position.sub(playerPos).mag(); ` -> 根据两点位置计算两点之间距离
    
    12. cc.director -> 是一个管理游戏逻辑流程的单例对象，标准调用方法是 cc.director.methodName()
        * `cc.director.loadScene('game')` -> 重新加载游戏场景 `game`
        
    13. `this.player.stopAllActions();` -> 这个方法会让节点上的所有 `Action` 都失效
    
    14. cc.callFunc() -> 一般作用是将函数转变为Action
        * 参数一 -> `selector`,以理解为方法名
        * 参数二 -> `Object`类型，一般填入`this`
        * 参数三 -> 为带回的数据
        * 返回 -> `ActionInstant`，这是一个瞬间执行的动作类
        
    15. cc.sequence() -> 将动作串行
    
    16. cc.repeatForever() -> 不断重复
    
    17. `cc.audioEngine.playEffect(this.scoreAudio, false);` -> 播放得分音效
        
    
    
### 1.4 Prefab 预制资源
需要重复生成的节点，将他保存成 Prefab（预制） 资源，作为动态生成节点时使用的模板

* 从 资源管理器 中拖拽 `assets/textures/star` 图片到场景中
* 将Star.js脚本添加到刚创建的 `star` 节点上
* 在 属性检查器 中把 `Pick Radius` 属性值设为 60
* 从 层级管理器 中将 `star` 节点拖拽到 资源管理器 中的 `assets` 文件夹下，就生成了名叫 `star` 的 Prefab 资源
* 将 Game.js 组件添加到 层级管理器 中的 Canvas 节点
* 从 资源管理器 中拖拽 `star` 的 `Prefab` 资源到 Game 组件的 `Star Prefab` 属性中
## 二. 属性管理器
### 1. Canvas
* `Design Resolution` -> 规定了游戏的设计分辨率，`Fit Height` 和 `Fit Width` 规定了在不同尺寸的屏幕上运行时，我们将如何缩放 `Canvas` 以适配不同的分辨率
### 2. Node
* 每一个元素的相关属性
* 背景图尺寸大概是 `(1360, 760)`

#### 2.1 Anchor 锚点
* 默认状态下，任何节点的锚点都会在节点的中心
* 希望将锚点设置在主角脚下，可在在 属性检查器 里找到 `Anchor` 属性，把其中的 `y` 值设为 `0`
* 锚点的取值
    * 当锚点的取值为（0，0）时表示锚点在节点的左下角
    * 锚点的取值为（1，1）时表示锚点在节点的右上角
    * 锚点的取值为（0.5，0.5）时表示锚点在节点的中心
    * 以此类推
    
### 3. Label 文字
* `Font Size` -> 设置字体大小

* 从 资源管理器 中拖拽 `assets/mikado_outline_shadow` 位图字体资源（注意图标是 `BF`）到 `Label` 组件的 `Font` 属性中，将文字的字体替换成我们项目资源中的位图字体

## 三. 层级管理器
在 层级管理器 中，显示在下方的节点的渲染顺序是在上方节点的后面，也就是说下方的节点是在上方节点之后绘制的
### 3.1 添加背景图片
* 在 资源管理器 里按照 `assets/textures/background` 的路径找到我们的背景图像资源
* 点击并拖拽这个资源到 层级管理器 中的 `Canvas` 节点上
* 直到 `Canvas` 节点显示橙色高亮，表示将会添加一个以 `background` 为贴图资源的子节点
### 3.2 添加地面图片
* 拖拽 资源管理器 中 `assets/textures/ground` 资源到 层级管理器 的 `Canvas` 上
* 拖拽资源的状态下移动鼠标指针到 `background` 节点的下方
* 直到在 `Canvas` 上显示橙色高亮框，并同时在 `background` 下方显示表示插入位置的绿色线条，然后松开鼠标
* 这样 `ground` 在场景层级中就被放在了 `background` 下方，同时也是 `Canvas` 下的一个子节点


## 四. 工具栏
### 4.1 矩形变换工具
![1-1](https://s2.ax1x.com/2020/02/04/1BkOZd.png)

### 4.2 移动工具
![1-2](https://s2.ax1x.com/2020/02/04/1BAITs.png)
<comment/>