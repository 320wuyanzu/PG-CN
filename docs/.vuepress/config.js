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
        children:['/1/']
    };
    let C2 = {
        title:'第二章 - 物理层',
        children:['/2/']
    };
    let C3 = {
        title:'第三章 - 数据链路层',
        children:['/3/']
    };
    let C4 = {
        title:'第四章 - 网络层',
        children:['/4/']
    };
    let C5 = {
        title:'第五章 - 传输层',
        children:['/5/']
    };
    let C6 = {
        title:'第六章 - 应用层',
        children:['/6/']
    };
    let C7 = {
        title:'第七章 - 网络安全',
        children:['/7/']
    };
    let C8 = {
        title:'第八/九章 - 视频、音频与无线网络',
        children:['/8/']
    };
    let C9 = {
        title:'第十章 - 下一代因特网',
        children:['/9/']
    };
    return [C1,C2,C3,C4,C5,C6,C7,C8,C9];
}
function sidebar_divide(){
    return{
        '/1/':[''],
        '/2/':[''],
        '/3/':[''],
        '/4/':[''],
        '/5/':[''],
        '/6/':[''],
        '/7/':[''],
        '/8/':[''],
        '/9/':[''],
        '/':['']
    }
}