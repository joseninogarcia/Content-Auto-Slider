# Content Auto Slider

Content Aauto Slider is a jQuery plugin created by Jose Nino Garcia. 
The purpose of the plugin is to animate the scroll automatically once the user loads the web page. This can apply to 
any element as long as the parent class or identifier can look forward for the child class to make sure it will 
check the height of the content inside. 

### Installation

All you need to have at the same time are the two libraries, the first one of course is the jQuery library then the second line is the 
content auto scroll javascript file which I made for the scrolling.
```
<script type="text/javascript" src="js/jquery-1.11.2.js"></script>
<script type="text/javascript" src="js/contentAutoScroll.js"></script>
```

### Initiate Options and Selector

After you place the two scripts in your HTML code, place this also:

```
<script type="text/javascript">
    $(document).ready(function () {
        $("#leftBoxTable_id").contentAutoScroll({
            interval: 20,
            insideClass: 'leftBoxTable'
        });
    });
</script>
```
In your HTML body, you must have this sample code below:

```
<div class="sample" id="leftBoxTable_id">
    <table class="leftBoxTable">
      <tr>
      	<th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Profession</th>
          <th>ID</th>
      </tr>
      <tr>
      	<td>Mildred</td>
          <td>Mendoza</td>
          <td>24</td>
          <td>IT</td>
          <td>887383</td>
      </tr>
      <tr>
      	<td>Are Lorenz</td>
          <td>Bergonia</td>
          <td>24</td>
          <td>IT</td>
          <td>776636</td>
      </tr>
    </div>
</div>
```

### Explanation

The sample code provided above is just an example on how to use the plugin. The identifier which is the selector, searches for the 
child class as you can see, there is a class in an html table because to figure the height of the element inside of it. 
I made a scroll function into my javascript file to loop the value of <code>i</code> and checks out the total height. Once the height
matches with the <code>i</code> variable, then that's the time it will return to negative one which in output, it will start the scroll top to zero.



