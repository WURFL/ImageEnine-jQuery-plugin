# ImageEnine jQuery plugin

A jQuery plugin is a plain JavaScript file that you must reference right after the jQuery file in your web views. Here’s how to use the plugin.
First, download and include the [jquery.imageengine.js](https://github.com/WURFL/ImageEngine-jQuery-plugin/jquery.imageengine.js) in your markup.
Then initialize the plugin with the options you need:
```
<script type="text/javascript">
    $("img").imageEngine({
        debug: true,
        account: "your-account",
        width: 400,
        height: 400,
        mode: "cropbox",
        transparencyColor: "0000ff"
    });
</script>
```
NOTE: You need to [sign up](http://www.scientiamobile.com/page/imageengine) to get your user token for the `account` setting.

In the simplest case, you need the following (recommended):

```
$("img").imageEngine( {account:"your-account"} );
```

If you just want to give ImageEngine a try, you could even call it without any parameters. In this case, as shown in the code, the ImageEngine URL is try.imgeng.in which is only used (and recommended) as a test platform.

```
$("img").imageEngine(); 
```

Thanks to the jQuery flexibility, you can even turn into ImageEngine endpoints all images in a web view in a single shot. It all depends on the jQuery selector you use to apply the plugin.

