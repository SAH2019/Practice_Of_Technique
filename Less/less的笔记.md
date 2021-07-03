### 1.less的注释

    1.1   //  注释法 只会在less文件中显示，编译后不显示
    1.2   /* */  会被编译到css文件中
    
    
    
### 2.less的转意
    使用 ~ 和字符串
    
    color:~"green"  也就是 color：green
    
    
### 3.变量
    
    3.1 定义: 【@变量名：变量值】定义变量
            @myColor: #ff4400
            @inner-padding: 15px
            
        
    3.2 使用 【@变量名】
            color:@myColor
     
    3.3 在类名中使用变量： @{变量名}
            //在类名中使用变量值!!!!                 
                    @msg:'ssd'
                    
                    .my_class_@{msg}{
                        width:500px;
                    }
                    
### 4.混合（MIXIN）
    4.1 混合可以将一个定义好的classA 轻松的引入另一个classB中，实现classB继承classA
        中的所有属性。我们还可以带参数的调用，就想使用函数一样。
        
    4.2 定义classA ：类名加一个括号，里面可以写参数
```
        .classA(){
            里面写css语句
        }    
```
    4.3 引入 定义的类
```
    #div{
        .classA(); //引入整个class的语句
        font-size:10px;
        }
```
    4.4 带参数的混合： 和函数几乎一样，需要传入参数
```
        .classA(@myColor,@myWidth){}

        使用：{
            font-size:50px;
            .class(#f40,#f50)
        }
```
    4.5 参数有默认值：
```
        .classA(@myColor:#f40){} 
```


### 5.模式匹配：
        模式匹配也是一个mixin，类似于编程中的switch语句，根据括号中的值来确定进行怎样的处理
        
    5.1 定义方式：
```
       //第一个.fl()
        .fl(left){
            float:left;
        }
        //第二个 .fl()
        .fl(left){
            float:left;
        }
```    
    5.2 特点： 是根据括号中的值不同来调用不同的样式
```
     //定义一个模式匹配
     //第一个参数写@_，表示这个混合的公共部分
        .triangle(@_,@my_color,@my_width){
          width:0px;
          height: 0px;
          border: @my_width solid transparent ;
        }
     //这个第一个参数表示对混合的区分
        .triangle(up,@my_color,@my_width){
          border-bottom: @my_width solid @my_color;
        }
        .triangle(down,@my_color,@my_width){
          border-top: @my_width solid @my_color;
        }
        .triangle(left,@my_color,@my_width){
          border-right: @my_width solid @my_color;
        }
        .triangle(right,@my_color,@my_width){
          border-left: @my_width solid @my_color;
        }
        //使用混合，传入参数
        .sjx{
          .triangle(up,red,100px)
        }
```

    5.3 模式匹配中的 arguments
        说明：类似于js中的arguments，里面包含了所有的参数，用于复合属性比较合适
        
```
        .my_border(@b_width,@b_style,@b_color){
                border:@arguments;
        }
```

### 6.less中的运算
    6.1 特点：
        ①计算不需要注意单位
        ②可以对颜色值进行运算
        ③
        ④
        
### 7. less中的嵌套规则
    7.1 普通嵌套：
        .content {
          ul {
            li {
              a {
                  text-align: center;
                  background: #1b6d85;
                  font-size: 30px;
              }
              input{
                border:1px solid red;
              }
            }
          }
        }
    7.2 在嵌套中使用媒体查询选择器
        和普通的嵌套规则几乎一样
        
 ```
//媒体查询
.div1{
  background: #1b6d85;
  @media screen{
    border:1px solid #1b6d85 ;
    @media (min-width: 768px){
      background: #2e6da4;
    }
    .son{
      color:#444444;
    }
  }
}
```
    7.3 &符 父级选择器
            -- 这个符号在less中可以代替父级选择器
       a{
         color:#f40;
         &:hover{
           color:#444444;
         }
       }
       
       
       注意：& 代替的是【所有】的【父级元素】的【字符串】！！！！！！
       
### 8. 条件混合----MIXIN GUARDS
        ---也是一种混合，只是根据条件判断类似于if语句
        定义：
        .compareWidth(@width) when (@width>=100px) and (@width=500px){
          padding: @width;
        }
        
        使用：
        .div2{
          .compareWidth(100px)
        }
        
        注意:
         ①条件可以使用 and、逗号（作用是or）、not 关键字来判断条件，关键词要写在括号外边
         ②条件中也可以结合使用less的函数
       
### 9. LOOPS 循环结构
        --- 在less中，混合可以调用它自身。这样，当一个混合递归的调用自己，再结合Guard表达式和模式匹配这两个特性，就可以写出循环结构
        
        定义：
        .loop(@n) when (@n>0){
          .loop(@n - 1);
          width: 10px * @n;
        }
        
        
### 10. MARGE 合并  （使用 + 符号和 +_ 符号两种）
        ---有些属性是复合属性，写多个的话会被覆盖，这个时候可以在属性声明后面写“+_”，就可以将所有的属性值合并在一起
            .div3{
              background+_: #444444;
              background+_: 10px 10px
            }
            结果是：  background: #444444 10px 10px;
            
        ---有些属性是可以写多组的，需要用逗号连接，比如background的叠加，可以设置多个,可以在属性声明后面写“+_”，就可以将所有的属性值合并在一起
            .div3{
              background+: #444444;
              background+: 10px 10px
            }
            
            结果是： background: #444444, 10px 10px;
            
            
### 11. @import的导入规则
    ①导入的位置不必是最前面，任意位置都可以
    ②可以导入其他类型的文件，css、php等等
  
  
### 12. !important 关键字

    ① 可以在调用混个后面写 !important,这样所有的属性都会有 ！important
    
### 13. API ----extend扩展

    extend是一个less中的一个伪类，用于继承某个选择器：继承的方式是将继承这个类的选择器，写在别=被继承的选择器上，逗号连接
    less写法：
        .a{
          font-size: 15px;
        }
        
        .b{
          color: #444444;
          &:extend(.a);
        }
    编译成css：
        .a,
        .b {
          font-size: 15px;
        }
        .b {
          color: #444444;
        }

        