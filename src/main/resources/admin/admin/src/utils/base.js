const base = {
    get() {
                return {
            url : "http://localhost:8080/springboot482k3/",
            name: "springboot482k3",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot482k3/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "网上购物商城系统研发"
        } 
    }
}
export default base
