;
(function () {
	const todos = [{
			id: 1,
			title: '上课',
			completed: false
		},
		{
			id: 2,
			title: '睡觉',
			completed: false
		},
		{
			id: 3,
			title: '打豆豆',
			completed: false
		}
	]
	new Vue({
		data: {
			todos,
			currentEditing: null
		},
		methods: {
			handleNewKeyDown(e) {
				const target = e.target
				const value = target.value.trim()
				if (!value.length) {
					return
				}
				const todos = this.todos
				todos.push({
					id: todos.length ? todos[todos.length - 1].id + 1 : 1,
					title: value,
					completed: false
				})
				target.value = ''
			},
			handleToggleAllChange(e) {
				const checked = e.target.checked
				this.todos.forEach(item => {
					item.completed = checked
				})
			},
			handleRemoveTodo(index, e) {
				// console.log(index,e)
				this.todos.splice(index, 1)
			},
			handleGetDblclick(todo) {
				this.currentEditing = todo
			},
			handleSaveEideKeyDown(todo, index, e) {
				const target = e.target
				const value = target.value.trim()
				if (!value.length) {
					this.todos.splice(index, 1)
				} else {
					todo.title = value
					this.currentEditing = null
				}
			},
			handleSaveEideKeyEsc() {
				this.currentEditing = null
			},
			handleClearAllDone() {
				// this.todos.forEach((item,index)=>{
				// 	if(item.completed){
				// 		this.todos.splice(index,1)
				// 	}
				// })
				for (let i = 0; i < this.todos.length; i++) {
					if (this.todos[i].completed) {
						this.todos.splice(i, 1)
						i--
					}
				}
				this.todos=this.todos.filter(t=>!t.completed)
			}
		}
	}).$mount('#app')
})()
