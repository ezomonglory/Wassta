import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

function ProjCard({ link, text, image, head }) {
	const Ref = useRef();

	//Detect Closest Edge
	useEffect(()=> {
        function closestEdge(x, y, w, h) {
            var topEdgeDist = distMetric(x, y, w / 2, 0);
            var bottomEdgeDist = distMetric(x, y, w / 2, h);
            var leftEdgeDist = distMetric(x, y, 0, h / 2);
            var rightEdgeDist = distMetric(x, y, w, h / 2);
            var min = Math.min(
                topEdgeDist,
                bottomEdgeDist,
                leftEdgeDist,
                rightEdgeDist,
            );
            switch (min) {
                case leftEdgeDist:
                    return "left";
                case rightEdgeDist:
                    return "right";
                case topEdgeDist:
                    return "top";
                case bottomEdgeDist:
                    return "bottom";
            }
        }
    
        //Distance Formula
        function distMetric(x, y, x2, y2) {
            var xDiff = x - x2;
            var yDiff = y - y2;
            return xDiff * xDiff + yDiff * yDiff;
        }
    
        var boxes =
            typeof document !== "undefined" ? document.querySelectorAll(".boxes") : "";
    
        for (var i = 0; i < boxes.length; i++) {
            boxes[i].onmouseenter = function (e) {
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop;
                var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
                var overlay = this.childNodes[1];
                var image = this.childNodes[0];
    
                switch (edge) {
                    case "left":
                        //tween overlay from the left
                        overlay.style.top = "0%";
                        overlay.style.left = "-100%";
                        gsap.to(overlay, { duration: 0.5, left: "0%" });
                        gsap.to(image, { duration: 0.5, scale: 1.2 });
                        break;
                    case "right":
                        overlay.style.top = "0%";
                        overlay.style.left = "100%";
                        //tween overlay from the right
                        gsap.to(overlay, { duration: 0.5, left: "0%" });
                        gsap.to(image, { duration: 0.5, scale: 1.2 });
                        break;
                    case "top":
                        overlay.style.top = "-100%";
                        overlay.style.left = "0%";
                        //tween overlay from the right
                        gsap.to(overlay, { duration: 0.5, top: "0%" });
                        gsap.to(image, { duration: 0.5, scale: 1.2 });
                        break;
                    case "bottom":
                        overlay.style.top = "100%";
                        overlay.style.left = "0%";
                        //tween overlay from the right
                        gsap.to(overlay, { duration: 0.5, top: "0%" });
                        gsap.to(image, { duration: 0.5, scale: 1.2 });
                        break;
                }
            };
    
            boxes[i].onmouseleave = function (e) {
                var x = e.pageX - this.offsetLeft;
                var y = e.pageY - this.offsetTop;
                var edge = closestEdge(x, y, this.clientWidth, this.clientHeight);
                var overlay = this.childNodes[1];
                var image = this.childNodes[0];
    
                switch (edge) {
                    case "left":
                        gsap.to(overlay, { duration: 0.5, left: "-100%" });
                        gsap.to(image, { duration: 0.5, scale: 1.0 });
                        break;
                    case "right":
                        gsap.to(overlay, { duration: 0.5, left: "100%" });
                        gsap.to(image, { duration: 0.5, scale: 1.0 });
                        break;
                    case "top":
                        gsap.to(overlay, { duration: 0.5, top: "-100%" });
                        gsap.to(image, { duration: 0.5, scale: 1.0 });
                        break;
                    case "bottom":
                        gsap.to(overlay, { duration: 0.5, top: "100%" });
                        gsap.to(image, { duration: 0.5, scale: 1.0 });
                        break;
                }
            };
        }
    })
	return (
		

		<div className='boxes overflow-hidden rounded-lg relative h-[50vh]'>
			<Image className={` da-image`} src={image} layout="fill" />
			<div className='overlay flex items-center justify-center'>
				<Link href={link} className=''>
					<div
						className='flex-col text-center items-center text-white justify-center absolute flex h-full z-10 p-4  '						
					>
						<h1 className=' text-lg mb-2 uppercase'> {head} </h1>
						<p className=' text-sm '>{text}</p>{" "}
					</div>
				</Link>
			</div>
		</div>
	);
}

export default ProjCard;
