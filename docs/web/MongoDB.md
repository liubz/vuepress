# MongoDB

## MongoDB 数据库创建、删除、表（集合），创建、删除数据的增、删、改、查

### 基本使用

- 使用数据库、创建数据库： use learn(数据库名称)
- 查看数据库: show dbs
- 插入数据 db.user.insert("name": "测试", "age": "22"}) user: 集合名称
- 查看数据库的集合： show collections
- 删除集合 db.COLLECTION_NAME.drop(): db.use.drop()
- 删除数据库 db.dropDatabase()

### 查找数据
- db.user.find({"name": "测试"}) 找到名字叫测试的数据 
- db.user.find({"age": {$lt: 22} }) 查找age小于22的数据 
- db.user.find({"age": {$lte: 22} }) 查找age小于等于22的数据 
- db.user.find({"age": {$gt: 22} }) 查找age大于22的数据 
- db.user.find({"age": {$gte: 22} }) 查找age大于等于22的数据 
- db.user.find({"age": {$gte: 22, $lte: 60} }) 查找age大于等于22小于等于60的数据
- db.user.find({"name": /mongo/}) 查找name包含mongo的数据
- db.user.find({"name": /^mongo/}) 查找name以mongo开头的数据
- db.user.find({"name": /mongo$/}) 查找name以mongo结尾的数据
- db.user.find().sort({age: 1}) 升序查询
- db.user.find().sort({age: -1}) 降序查询
- db.user.find().limt(5) 查询前5条数据
- db.user.find().skip(5) 查询前5条以后数据
- db.user.count() 查询一共有几条数据

### 插入数据

- 循环插入数据

``` js
for(var i=0; i<100; i++){
... db.user.insert({"name": "zhangsan" + i, "age": i})
... }
```

### 索引

- 创建索引 db.user.ensureIndex({"username": 1}) 
- 复合索引 db.user.ensureIndex({"username": 1, "age": -1}) 
- 获取当前集合的索引 db.user.getIndexes()
- 删除索引 db.user.dropIndex({"username": 1})
- 回去查询的执行时间 db.tablename.find().explain("executionStats")