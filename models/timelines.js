// Generated by CoffeeScript 1.9.3
(function() {
  module.exports = {
    id: {
      type: "int",
      autoIncrement: true,
      primaryKey: true
    },
    user_id: "int",
    user_headpic: "varchar(255)",
    user_nick: "varchar(100)",

    target_title:"varchar(255)",
    target_url: "varchar(255)",
    target_desc: "varchar(100)",
    target_pic:"varchar(255)",
    target_id:"int", //目标id，文章或者评论的id
    action: "varchar(30)", // 1分享了 2评论了 3发表了
    desc: "text",

    comment_count:{
      type:"int",
      defaultValue:0
    },
    zan_count:{
      type:"int",
      defaultValue:0
    },
    is_publish:{
      type:"tinyint",
      defaultValue:0
    }
  };

}).call(this);
