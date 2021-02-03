import React from "react";
import GitMergeFillIcon from 'remixicon-react/GitMergeFillIcon';
import Window2 from 'remixicon-react/Window2FillIcon';
import ServerFillIcon from 'remixicon-react/ServerFillIcon';


class Speciality extends React.Component {
    render() {
return <section class="section bg-light" id="service">
<div class="container">
    <div class="row">
        <div class="col-12 mb-4">
            <h2 class="title">Especialidades <span class="title-border ml-4 pl-3"></span></h2>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="service-box rounded position-relative">
                <div class="service-icon rounded"><ServerFillIcon class="ri-lightbulb-flash-fill"></ServerFillIcon></div>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">SysAdmin</h5>
                <p class="text-muted mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, mauris sed faucibus dignissim, ligula nunc congue risus, eu tincidunt nulla enim et odio. Quisque in lacus in nibh interdum pharetra. Curabitur eu diam risus. Praesent nulla velit, sodales ac tincidunt ac, venenatis id est. Integer quis lobortis ex. Sed tempus risus eget placerat malesuada. Maecenas vel efficitur libero. Proin vestibulum purus vitae mi gravida pulvinar. Nunc non lorem pharetra, dictum augue non, ultrices leo.
                </p>
                <a class="text-uppercase font-size-13 font-weight-medium text-muted pt-4" href="#">Leer Más</a>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="service-box rounded position-relative active">
                <div class="service-icon rounded"><Window2 class="ri-window-2-fill"></Window2></div>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">Desarrollo</h5>
                <p class="text-muted mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, mauris sed faucibus dignissim, ligula nunc congue risus, eu tincidunt nulla enim et odio. Quisque in lacus in nibh interdum pharetra. Curabitur eu diam risus. Praesent nulla velit, sodales ac tincidunt ac, venenatis id est. Integer quis lobortis ex. Sed tempus risus eget placerat malesuada. Maecenas vel efficitur libero. Proin vestibulum purus vitae mi gravida pulvinar. Nunc non lorem pharetra, dictum augue non, ultrices leo.
                </p>
                <a class="text-uppercase font-size-13 font-weight-medium text-muted pt-4" href="#">Leer Más</a>
            </div>
        </div>

        <div class="col-lg-4 col-md-6 mt-4 pt-2">
            <div class="service-box rounded position-relative">
                <div class="service-icon rounded"><GitMergeFillIcon class="ri-award-fill"></GitMergeFillIcon></div>
                <h5 class="font-size-17 font-weight-semibold mt-4 pt-2">DevOps</h5>
                <p class="text-muted mt-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam interdum, mauris sed faucibus dignissim, ligula nunc congue risus, eu tincidunt nulla enim et odio. Quisque in lacus in nibh interdum pharetra. Curabitur eu diam risus. Praesent nulla velit, sodales ac tincidunt ac, venenatis id est. Integer quis lobortis ex. Sed tempus risus eget placerat malesuada. Maecenas vel efficitur libero. Proin vestibulum purus vitae mi gravida pulvinar. Nunc non lorem pharetra, dictum augue non, ultrices leo.
                </p>
                <a class="text-uppercase font-size-13 font-weight-medium text-muted pt-4" href="#">Leer Más</a>
            </div>
        </div>
    </div>
</div>
</section>;
    }
}

export default Speciality