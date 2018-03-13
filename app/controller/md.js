const Controller = require('egg').Controller;
// app/controller/user.js
class MDController extends Controller {
    async get() {
        console.log(this)
        console.log(this.ctx)
        const ctx = this.ctx;
        const md = ctx.params.id;
        const markdown = await ctx.service.md.find(md);
        ctx.body = markdown;
    }
}
module.exports = MDController;