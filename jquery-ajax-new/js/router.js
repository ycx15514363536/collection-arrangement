/**
 * Created by yangliu on 2017/3/26.
 */
var newsList=[
    {
        link:"http://news.qq.com/a/20170325/025293.htm",
        src:"images/3.jpg",
        h3:"媒体：美军多次提出南海自由航行 被特朗普政府压制",
        p:"【观察者网综合】美国《布莱特巴特新闻》网站3月24日报道，美国海军近期多次提出申请，要求继续在南海地区的“自由航行作业”，但特朗普政府仍未批准。"
    },
    {
        link:"http://news.qq.com/a/20170325/027659.htm",
        src:"images/4.jpg",
        h3:"广州从化安监局：热电厂坍塌系施工作业平台简易所致",
        p:"新华社广州3月25日电（记者周科、胡林果）广州市从化区安监局副局长李炽彬25日下午接受新华社记者采访时说，当日发生的热电厂坍塌事故原因系施工作业平台简易所致。"
    },
    {
        link:"http://news.qq.com/a/20170325/023517.htm",
        src:"images/5.jpg",
        h3:"奥凯员工证实电缆是“贴牌”货 老板涉嫌学历造假",
        p:"近日华商报和西安交通大学相关部门取得联系。“在我校所有可查询的系统中均未能查到奥凯电缆负责人王志伟这个人。”西安交通大学相关部门工作人员说，“王志伟其人和西安交通大学无任何关系。”"
    },
    {
        link:"http://news.qq.com/a/20170325/021195.htm,",
        src:"images/6.jpg",
        h3:"法国北部城市地铁站发生枪击 3人受伤",
        p:"法国北部城市利勒的一个地铁站附近24号晚发生一起枪击事件，三人受伤。（据目击者称，当晚该市的一个地铁站旁，一名身份不明的男子突然朝人群开数枪，随后逃跑，造成在地铁站附近的三人受伤，"
    },
    {
        link:"http://news.qq.com/a/20170325/026665.htm",
        src:"images/7.jpg",
        h3:"新华社：共享单车数十亿资金池，钱都去哪儿了？",
        p:"当前，共享单车成为很多人短途出行的选择，在享受便捷的同时，你有没有受到押金、余额充值容易但退款难的困扰？据不完全估算，共享单车市场的押金、"
    },
    {
        link:"http://news.qq.com/a/20170325/006192.htm",
        src:"images/5.jpg",
        h3:"奥凯员工证实电缆是“贴牌”货 老板涉嫌学历造假",
        p:"近日华商报和西安交通大学相关部门取得联系。“在我校所有可查询的系统中均未能查到奥凯电缆负责人王志伟这个人。”西安交通大学相关部门工作人员说，“王志伟其人和西安交通大学无任何关系。”"
    }
]


app.get("/news",function(req,res){
    //前台传过来的数据
    var start=req.query.dt
    var len=2
    var datas=newsList.slice(start*len,start*len+len)
    res.send({
        status:0,
        data:datas
    })
})