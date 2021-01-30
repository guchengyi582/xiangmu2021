// 加号的 绑定事件和 计算
bindEvent($(".add"), "onclick", function () {
    let countNode = this.parentNode.querySelector(".count");
    let subTotalNode = this.parentNode.parentNode.querySelector(".subtotal");
    // console.log(subTotalNode)
    let subpricelNode = this.parentNode.parentNode.querySelector(".subprice");
    countNode.innerHTML = parseInt(countNode.innerHTML) + 1;
    subTotalNode.innerHTML = parseInt(subpricelNode.innerHTML) * parseInt(countNode.innerHTML);
    computed()
})

// 减号的 绑定事件和 计算
bindEvent($(".sub"), "onclick", function () {
    let countNode = this.parentNode.querySelector(".count");
    if (!parseInt(countNode.innerHTML)) {
        return;
    }
    let subTotalNode = this.parentNode.parentNode.querySelector(".subtotal");
    let subpricelNode = this.parentNode.parentNode.querySelector(".subprice");
    countNode.innerHTML = parseInt(countNode.innerHTML) - 1;
    subTotalNode.innerHTML = parseInt(subpricelNode.innerHTML) * parseInt(countNode.innerHTML);
    computed()
})

// 删除的操作
bindEvent($(".delete"), "onclick", function () {
    let tr = this.parentNode.parentNode;
    tr.style.opacity = 1;
    let fead = setInterval(() => {
        let o = parseFloat(tr.style.opacity);
        if (o <= 0) {
            clearInterval(fead);
            tr.remove();
            computed();
            return;
        }
        tr.style.opacity = 0 - 0.03
    }, 16)
})

// 选择文本框的勾选事件
bindEvent($(".check"), "onclick", function () {
    computed();
})

// 全选框 点击 事件
bindEvent($(".checkAll"), "onclick", function () {
    for(let i = 0 ; i < $(".check").length ; i++){
        $(".check")[i].checked = true ;
    }
    computed()
})

// 函数分装 计算总件数 和 总花费
function computed() {
    let totalPrice = 0;
    let totalCount = 0;
    this.checkList = $(".check");
    for (let i = 0; i < this.checkList.length; i++) {
        if (this.checkList[i].checked) {
            let tr = this.checkList[i].parentNode.parentNode.parentNode.parentNode.parentNode;
            console.log(this.checkList[i].parentNode.parentNode.parentNode.parentNode)
            totalPrice += parseFloat(tr.querySelector(".subtotal").innerHTML)
            console.log(totalPrice )
            totalCount += parseFloat(tr.querySelector(".count").innerHTML)
        }
    }
    $(".totalcount").html(totalCount) ;
    $(".totalprice").html(totalPrice);
}