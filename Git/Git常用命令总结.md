###一、常用命令：

###	1. git config --global user.name "你的名字"
	            配置姓名
###	2. git config --global user.email "你的邮箱"
	            配置邮箱
###	3. git config user.name   
	            查看配置的姓名
###	4. git config user.email 
	            查看配置的邮箱
###	5. git init
	            把当前的目录变成可以管理的git仓库，生成隐藏的.git文件夹
###	6. git add xx
	            把xx文件添加到【暂存区】 
	            ① .  表示全部文件都添加进去
	            ② *
	            ③执行添加命令的时候，可能回因为文件中换行符的问题报错
	                git config --global core.autocrlf false
	                解决Git默认配置替换回车换行成统一的CRLF的问题            
###	7. git commit -m “xx”
	            提交文件 -m后面的是注释
	            
###	8. git status
	            查看仓库状态
	            ①绿色表示文件在【暂存区】
	            ②红色的表示在【工作区】
	            ③没有任何的显示表示在【版本区】
###	9. git diff / git diff --cached / git diff master 
	            比较暂存区和工作区 / 版本区与暂存区 / 版本区与工作区  的差别
	        git diff 文件1 文件2 
	                查看两个文件的差异
###	10. git log
	            查看历史的提交记录
###	11. git reset --hard HEAD^
	            往上回退一个版本
###	12. git reflog
	            查看历史记录的版本号id
###	13. git reset --hard 版本号id
	            回到版本号的版本
###	12. git checkout -- xx
	            把xx文件在【工作区】的修改全部撤销
###	13. git rm xx / git rm -f xx
	            删除xx文件/文件夹 
	            删除之后要commit	             
###	14. git remote add origin https://github.com/xxxxx/a.git 
	            关联一个远程库
###	15. git remote remove origin
	            移除关联的仓库
###	15. git push -u（第一次要用-u，以后不用）origin master
	            把当前master分支推送到远程库
###	16. git clone https://github.com/xxxxx   
	            从远程库中克隆
###	17. git checkout -b xxx
	            创建xxx 分支 并切换到xxx分支上
	            -b 表示创建分支
	            从哪个master建立的分支，master会复制到新建的分支
###	18. git branch
	            查看当前所有的分支
###	19. git checkout master
	            切换回master分支
###	20. git merge xxx
	            在当前分支合并xxx分支
###	21. git branch -d xxx
	            删除xxx分支
###	22. git branch xxx
	            创建分支xxx
###	23. git remote
	            查看远程库信息
###	24. git remote -v
	            查看远程库的详细信息
###	25. git pull origin master 
	            将远程库的更新拉取到本地并自动合并
###	26. git push origin master
	            git会把master分支推送到远程库对应的分支上
	            
	               
//如果本地没有此分支，是拉取不到的，可以执行git pull 命令看一下
*  git checkout -b dev origin/dev // 克隆仓库后切换到dev分支（根据远程分支生成本地分支）


###二、不小心关联错了仓库,怎么办？
 
	* 暴力解决：删除.git，重新建立本地仓库
	* 优雅解决：git remote remove origin，再在重新关联仓库


###三、pull和fetch的区别？
	* git pull origin master
		* 将远程仓库的master分支上代码版本复制/合并到本地master分支上
	* git fetch origin master:dev
		* 新建了一个dev分支，将远程仓库的master分支上代码版本复制到dev分支上
		* 就一定不会产生冲突
		* git diff master dev对比两分支内容，观察会不会产生冲突
		* 如果会，先解决，在合并分支。如果不会，就直接合并分支