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
            { text: '下一代因特网', link:'/9/'},

        ],
        sidebarDepth:2,
        sidebar: sidebar_divide()
    }
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