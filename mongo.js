// 下面注释中出现document 即 {a:b,c:d}之类的数据集
// show dbs  --查看当前数据库
// use 数据库名  -- 切换到指定数据库  如果数据库不存在则创建这个数据库
// db 或 db.getName()  --查看当前正在使用的数据库
// show collections --查看当前数据库下的所有集合
// db.createCollection("集合名称") --创建一个集合
// db.集合名称.insert(document | Array(document)) --向指定集合插入一个或多个文档
// db.集合名称.find() --在指定的集合中查询数据
// db.集合名称.find().count() --返回集合中数据的条数
// db.集合名称.find().limit(number) --返回指定数量的结果
// db.集合名称.find().skip(number) --跳过指定数量的结果
// db.集合名称.find({key:value,...}) --查询指定字段值的结果
// key:value,...   相当于sql中的  where key=value and key =value and ...
// db.集合名称.find({},{key:1,_id:0}) --返回指定的字段
//     将字段指定为1即可返回对应字段，其它字段不返回 如果不显示_id 只需指定为0
// db.集合名称.find({    --- or 查询
//     $or : [{
//         key : value
//     },{
//         key : value
//     },...]
// })
// db.集合名称.find({age:{$gt:30}}) --查询年龄大于30的文档
//     $gt : 大于
//     $lt : 小于
//     $gte : 大于等于
//     $lte : 小于等于
//
// db.集合名称.find({ --查询年龄大于等于30 且年龄小于等于40的文档
//  age : {
//      $gte : 30,
//      $lte : 40
//  }
// })
//
// db.集合名称.find().sort({age:1}) --根据年龄升序排列  传入-1 根据年龄降序排列
//
//
//
// db.集合名称.update(query,{$set或$inc:document},options) 更新文档
//  query : 限定条件
//  $set : 设定某字段的值
//  $inc : 在符合相关条件的字段原值上加上指定的值
//  document : 要更新的文档内容
//  options:{
//      upsert : boolean  当查询条件的结果不存在时，是否将文档插入的当前集合  默认false
//      multi : boolean  是否更新所有符合条件的数据  默认为false 只更新匹配到的第一条数据
//  }
//
// db.集合名称.remove(query) 删除指定条件的文档
//
//
// db.集合名称.drop() 删除指定的集合
//
// db.dropDatabase() 删除数据库  注：请在删除前使用db命令或db.getName()命令查看当前正在使用的数据库 删除后不可恢复
//
//
//
//
//
//
