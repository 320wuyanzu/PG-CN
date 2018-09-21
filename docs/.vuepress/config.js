module.exports = {
    base: '/PG-CN/',
    title: '计算机网络(803)考研复习笔记',
    description: '计算机网络(第六版)-谢希仁',
    themeConfig: {
        lastUpdated: '最后一次更新',
        nav: [
            { text: 'Personal Homepage', link: 'https://320wuyanzu.github.io' },
            { text: '考纲目录', link: '/' },
            { text: '概述', link:'/1/'},
            { text: '物理层', link:'/2/'},
            { text: '数据链路层', link:'/3/'},
            { text: '网络层', link:'/4/'},
            { text: '传输层', link:'/5/'},
            { text: '应用层', link:'/6/'},
            { text: '网络安全', link:'/7/'},
            { text: '视频、音频与无线网络', link:'/8/'},
            { text: '下一代因特网', link:'/9/'}
        ],
        sidebarDepth: 2,
        sidebar: sidebar_group()
    }
}


function sidebar_group(){
    let C1 = {
        title:'第一章 - 概述',
        children:['/1/1','/1/2','/1/3','/1/4','/1/5','/1/6','/1/7']
    };
    let C2 = {
        title:'第二章 - 物理层',
        children:['/2/1','/2/2','/2/3','/2/4','/2/5','/2/6']
    };
    let C3 = {
        title:'第三章 - 数据链路层',
        children:['/3/1','/3/2','/3/3','/3/4','/3/5','/3/6']
    };
    let C4 = {
        title:'第四章 - 网络层',
        children:['/4/1','/4/2','/4/3','/4/4','/4/5','/4/6','/4/7']
    };
    let C5 = {
        title:'第五章 - 传输层',
        children:['/5/1','/5/2','/5/3','/5/4','/5/5','/5/6','/5/7','/5/8','/5/9']
    };
    let C6 = {
        title:'第六章 - 应用层',
        children:['/6/1','/6/2','/6/3','/6/4','/6/5','/6/6','/6/7','/6/8']
    };
    let C7 = {
        title:'第七章 - 网络安全',
        children:['/7/1','/7/2','/7/3','/7/4','/7/5','/7/6','/7/7']
    };
    let C8 = {
        title:'第八章 - 视频、音频服务',
        children:['/8/1','/8/2','/8/3','/8/4']
    };
    let C9 = {
        title:'第九章 - 无线网络和移动网络',
        children:['/9/1','/9/2','/9/3','/9/4','/9/5']
    };
    let C10 = {
        title: '第十章 - 下一代因特网',
        children:['/10/1','/10/2','/10/3']
    };
    return [C1,C2,C3,C4,C5,C6,C7,C8,C9,C10];
}