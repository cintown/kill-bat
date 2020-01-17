# Reactive Programming总结

Reactive Programming 作为观察者模式（Observer）的延伸，
不同于传统的命令编程方式（Imperative programming）同步拉取数据的方式，如迭代器模式（Iterator）。
而是采用数据发布者同步或异步地推送到数据流（Data Streams）的方案。
当该数据流（Data Steams）订阅者监听到传播变化时，立即作出响应动作。
在实现层面上，Reactive Programming 可结合函数式编程简化面向对象语言语法的臃肿性，屏蔽并发实现的复杂细节，提供数据流的有序操作，从而达到提升代码的可读性，以及减少 Bugs 出现的目的。
同时，Reactive Programming 结合背压（Backpressure）的技术解决发布端生成数据的速率高于订阅端消费的问题

<comment-comment/><comment/>