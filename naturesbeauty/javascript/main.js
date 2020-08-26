// https://jsdoc.app/

/**
 * Binds all of the information together.
 * @ class
 */
class Author {
	constructor(url, name, date, id) {
		this.url_ = url;
		this.name_ = name;
		this.date_ = date;
		this.id_ = id;
	}
	
	/**
	 * Returns the url.
	 */
	GetUrl() { return this.url_; }
	
	/**
	 * Returns the name.
	 */
	GetName() { return this.name_; }
	
	/**
	 * Returns the date.
	 */
	GetDate() { return this.date_; }
	
	/**
	 * Returns the id.
	 */
	GetId() { return this.id_; }
};

const pictures = [ new Author("images/1.jpg", "John", "December 20 2019", "1"),
    new Author("images/2.jpg", "Jane", "December 20 2019", "2"),
	new Author("images/3.jpg", "Jane", "December 20 2019", "3"),
	new Author("images/4.jpg", "John", "December 20 2019", "4"),
	new Author("images/5.jpg", "Sarah", "December 20 2019", "5"),
	new Author("images/6.jpg", "Sarah", "December 20 2019", "6"),
	new Author("images/7.jpg", "Jane", "December 20 2019", "7"),
	new Author("images/8.jpg", "Jane", "December 20 2019", "8"),
	new Author("images/9.jpg", "Sarah", "December 20 2019", "9"),
	new Author("images/10.jpg", "John", "December 20 2019", "10"),
	new Author("images/11.jpg", "John", "December 20 2019", "11"),
	new Author("images/12.jpg", "Sarah", "December 20 2019", "12"),
	new Author("images/13.jpg", "John", "December 20 2019", "13"),
	new Author("images/14.jpg", "Jane", "December 20 2019", "14"),
	new Author("images/15.jpg", "John", "December 20 2019", "15") ];

/**
 * Set the given id to just an image (removing everything else).
 * @param {element} id - Id to append to.
 * @param {string} clazz - Specific class you would like added to the picture.
 * @param {string} date - Date of when the picture was taken.
 * @param {string} name - Name of the artist.
 * @param {string} url - Path to the image (from index.html).
 * @param {string} id - The html id you would like to have.
 */
function Render(id, clazz, date, name, url, idtag) {
	return id.html("<img class='"
		+ clazz + "' data-date='"
		+ date + "' data-author='"
		+ name + "' src='"
		+ url + "' id='"
		+ idtag + "' alt='Picture taken by a staff member'/>");
}

/**
 * Append an image to given id.
 * @param {element} id - Id to append to.
 * @param {string} clazz - Specific class you would like added to the picture.
 * @param {string} date - Date of when the picture was taken.
 * @param {string} name - Name of the artist.
 * @param {string} url - Path to the image (from index.html).
 * @param {string} id - The html id you would like to have.
 */
function Append(id, clazz, date, name, url, idtag) {
	return id.append("<img class='"
		+ clazz + "' data-date='"
		+ date + "' data-author='"
		+ name + "' src='"
		+ url + "' id='"
		+ idtag + "' alt='Picture taken by a staff member'/>");
}

/**
 * Register the mouseover and mouseleave before and after
 * we set the image.
 * @param {element} id - Given id to append.
 * @param {int} index - Index of the image.
 */
function Register(id, index) {
	$(".main").mouseenter(function() {
		id.prepend("<p id='new' class='centered' style='display: inline-block'> Author: " + pictures[index].GetName()) + "</p>";
	});
	
	$(".main").mouseleave(function() {
		$("#new").remove();
	});
}

$(document).ready(function() {
    "use strict"
	
	const $nav = $("ul.nav"),
        $hamburger = $(".hamburger"),
		$preview = $("#preview"),
		$gallery = $("#gallery");
	
	let index = Math.round(Math.random() * 15);
	
	$nav.hide();
	
	$hamburger.click(function() {
        $nav.slideToggle("fast", function() {});
    });
	
	$(window).resize(function() {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
	
	Render($preview, "main", pictures[index].GetDate(),
			pictures[index].GetName(),
			pictures[index].GetUrl(),
			pictures[index].GetId());
	
	setInterval(function() {
		index = Math.round(Math.random() * 15);
		Render($preview, "main", pictures[index].GetDate(),
			pictures[index].GetName(),
			pictures[index].GetUrl(),
			pictures[index].GetId());
		Register($preview, index);
	}, 5000);
	
	for (let i = 0; i < pictures.length; ++i) {
		Append($gallery, "gallery box", pictures[i].GetDate(),
			pictures[i].GetName(),
			pictures[i].GetUrl(),
			pictures[i].GetId());
	}
	
	$("img").click(function() {
		index = this.id - 1;
		Render($("#test"), "focus\' id='cur-img'", pictures[index].GetDate(),
			pictures[index].GetName(),
			pictures[index].GetUrl(),
			pictures[index].GetId());
		document.getElementById("cur-img").onload = function(e) {
			let x = $("#cur-img").position();
			$("#test").append("<button id='close' style='position: fixed; top: " + x.top + "px; left: " + x.left + "px; background-color: #ffffff;'>x</button>");
			$("#close").click(function() {
				$("#test").html("");
			});
		}
	});
	
	Register($preview, index);
});
