using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(MarkdownPreviewerReact.Startup))]
namespace MarkdownPreviewerReact
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
