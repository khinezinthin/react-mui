import React from "react";

const WorthServicesCompo = () => {
  const services = [
    {
      id: 1,
      img: service1,
      title: "Sea Transport Services",
      desc: "When you need your shipment at any destination of your choice in the shortest possible time; then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. Still thinking? Don't. Just send your next package from Amazon, Ebay, Apple ...etc and we will deliver right to your doorstep anywhere within out reach. With daily and weekly cargo flights, you can be rest assured that we will get your goods to their destination in time.",
    },
    {
      id: 2,
      img: service2,
      title: "Warehousing Services",
      desc: "We also offer ocean freight, depending on your choice of transportation from 20ft to 40ft containers. We can also deliver your shipment to your doorstep either a vehicle or bulky item. Terms and conditions applies. ",
    },
    {
      id: 3,
      img: service3,
      title: "Air Fright Services",
      desc: "When you need your shipment at any destination of your choice in the shortest possible time; then be rest assured we will fly it for you. Forget about paying outrageous shipping fees as we offer fast, affordable and stress shipping and free package forwarding services. Still thinking? Don't. Just send your next package from Amazon, Ebay, Apple ...etc and we will deliver right to your doorstep anywhere within out reach. With daily and weekly cargo flights, you can be rest assured that we will get your goods to their destination in time.",
    },
    {
      id: 4,
      img: service2,
      title: "Local Shipping Service",
      desc: "Package forwarding is when you order items from online stores and ship it to us so you can avoid outrageous international shipping fees. Request a service today or contact us for more information. ",
    },
  ];
  return (
    <>
      {/* our services v1  */}
      <Grid container className="pb-10 relative overflow-hidden">
        {/* Background Shape  */}
        <>
          <div className=" max-sm:hidden absolute -z-10 right-0 top-[-32px]">
            <Rectangle />
          </div>

          <div className=" max-sm:hidden absolute -z-10 right-0 top-[320px]">
            <Rectangle />
          </div>

          <div className=" max-sm:hidden absolute -z-10 left-0 bottom-[710px]">
            <Rectangle />
          </div>

          <div className=" max-sm:hidden absolute -z-10 left-0 bottom-[310px]">
            <Rectangle />
          </div>

          <div className=" absolute -z-10 left-0 top-[245px]">
            <Shape1 />
          </div>

          <div className=" absolute -z-10 right-0 bottom-[700px]">
            <Circle2Svg />
          </div>

          <div className=" absolute -z-10 right-[495px] top-[845px]">
            <DottedSvg />
          </div>

          <div className=" absolute -z-10 left-[488px] top-[58px]">
            <Dotted2Svg />
          </div>

          <div className=" absolute -z-10 right-[-15px] bottom-[-32px]">
            <Shape2 />
          </div>
        </>

        <Grid item xs={12}>
          <Typography
            data-aos="zoom-in"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
            component={"h3"}
            className=" heading-secondary text-center mb-20 max-[900px]:mb-10"
          >
            Our Services
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              {services?.map((service) => (
                <div key={service?.id} className=" mb-20 max-sm:mb-12">
                  {service?.id % 2 === 0 ? (
                    <div className=" flex max-[900px]:flex-col-reverse gap-8 items-center">
                      {/* Title  */}
                      <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className=" w-[60%] max-[900px]:w-full"
                      >
                        <Typography
                          component={"h3"}
                          className=" heading-primary"
                        >
                          {service?.title}
                        </Typography>
                        <Typography
                          component={"p"}
                          className="paragraph leading-[25px] mt-5"
                        >
                          {service?.desc}
                        </Typography>
                      </div>

                      {/* Image  */}
                      <div
                        data-aos="flip-right"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        data-aos-once="true"
                        className=" w-[40%] max-[900px]:w-full"
                      >
                        <Image
                          src={service?.img}
                          alt={service?.title}
                          className=" rounded-md border w-full"
                        />
                      </div>
                    </div>
                  ) : (
                    <div className=" flex max-[900px]:flex-col gap-8 items-center">
                      {/* Image  */}
                      <div
                        data-aos="flip-left"
                        data-aos-easing="ease-out-cubic"
                        data-aos-duration="2000"
                        data-aos-once="true"
                        className=" w-[40%] max-[900px]:w-full"
                      >
                        <Image
                          src={service?.img}
                          alt={service?.title}
                          className=" rounded-md border w-full"
                        />
                      </div>

                      {/* Title  */}
                      <div
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="1500"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        className=" w-[60%] max-[900px]:w-full"
                      >
                        <Typography
                          component={"h3"}
                          className=" heading-primary"
                        >
                          {service?.title}
                        </Typography>
                        <Typography
                          component={"p"}
                          className="paragraph leading-[25px] mt-5"
                        >
                          {service?.desc}
                        </Typography>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Grid>

      {/* Our Services v2  */}
      {/* How We Work  */}
      <Grid item xs={12} className="mb-20">
        <Grid container>
          <Grid item xs={1} />
          <Grid item xs={10}>
            <div className=" flex gap-16 max-xl:gap-10 max-xl:flex-col">
              {/* Image  */}
              <div
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                data-aos-once="true"
                className=" w-[60%] max-xl:w-full"
              >
                <Image
                  src={cargoContainer}
                  alt={"cargo ship container"}
                  className=" rounded-md border w-full"
                />
              </div>

              {/* How We Work  */}
              <div className=" w-[40%] max-xl:w-full">
                <Typography
                  data-aos="fade-up"
                  data-aos-delay="50"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-out"
                  data-aos-once="true"
                  component={"h3"}
                  className=" heading-secondary mb-6"
                >
                  How We Works
                </Typography>

                <div className=" space-y-10">
                  {works?.map((work) => (
                    <div
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      key={work?.id}
                      className=" flex items-start gap-5"
                    >
                      {/* Image  */}
                      <Image
                        src={work?.img}
                        alt={work?.title}
                        className=" w-[40px]"
                      />

                      {/* Title  */}
                      <div className=" space-y-1">
                        <Typography
                          component={"h3"}
                          className=" font-rubik text-secondary-color sm:text-[22px] text-[18px] font-medium"
                        >
                          {work?.title}
                        </Typography>

                        <Typography
                          component={"p"}
                          className="paragraph leading-[22px] pb-1"
                        >
                          {work?.desc}
                        </Typography>

                        <Link href={`/our-service/2`}>
                          <Button>Read More</Button>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={1} />
        </Grid>
      </Grid>

      {/* Our service v3 */}
      <>
      {/* Exprience the best logistics Service  */}
      <div className="lg:h-[638px] h-auto max-lg:pt-12 max-lg:pb-14 relative">
        {/* Background Shape  */}
        <>
          <div className=" absolute -z-10 left-[-15px] top-[230px]">
            <Circle5Svg width="214" height="340" />
          </div>

          <div className=" absolute -z-10 right-[75px] top-[-260px] max-xl:hidden">
            <DoubleCircleSvgComponent width="1000" height="1000" />
          </div>
        </>

        <Grid container className=" h-full">
          <Grid item md={1} xs={1} />
          <Grid item md={5} xs={10} alignContent={"center"}>
            <Typography
              data-aos="fade-right"
              data-aos-delay="50"
              data-aos-duration="1300"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              component={"h1"}
              className=" font-rubik font-extrabold lg:text-[49px] md:text-[47px] text-[40px] text-primary-color lg:leading-[56px] md:leading-[55px] leading-[52px]"
            >
              Exprience the best logistics Service
            </Typography>
            <Typography
              data-aos="fade-right"
              data-aos-delay="150"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              data-aos-once="true"
              component={"p"}
              className=" paragraph mt-7"
            >
              Lorem ipsum dolor sit amet consectetur. Est blandit tempus et
              morbi elit tortor nibh et. Vel morbi fermentum leo magna nisi
              tortor. A varius hendrerit nisl id nibh tellus id ullamcorper
              elit. Lectus nibh nulla ut duis semper aliquam.
            </Typography>
          </Grid>
          <Grid item md={6} xs={12} alignContent={"end"}>
            <Image
              src={serviceImg}
              alt="container"
              className=" min-[900px]:h-[550px] max-[900px]:hidden"
            />
          </Grid>
        </Grid>
      </div>

      <Grid
        container
        className=" relative overflow-hidden pb-28 pt-20 max-xl:pt-0"
      >
        {/* Background Shape  */}
        <>
          <div className=" absolute -z-10 left-0 top-[245px]">
            <Shape1 />
          </div>

          <div className=" absolute -z-10 right-24 top-20">
            <Dotted2Svg />
          </div>

          <div className=" absolute -z-10 right-0 top-[350px]">
            <Circle2Svg />
          </div>

          {/* <div className=" absolute -z-10 right-[-15px] bottom-[-32px]">
            <Shape2 />
          </div> */}
        </>

        {/* How We Work  */}
        <Grid item xs={12} className="mb-16">
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <div className="">
                {/* How We Work  */}
                <div className="">
                  <Typography
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    component={"h3"}
                    className=" heading-secondary mb-8 text-center"
                  >
                    How We Work
                  </Typography>

                  <Grid container gap={2} className=" ">
                    {works?.map((work) => (
                      <Grid
                        item
                        lg={3.8}
                        sm={5.8}
                        data-aos="fade-up"
                        data-aos-delay="150"
                        data-aos-duration="1200"
                        data-aos-easing="ease-in-out"
                        data-aos-once="true"
                        key={work?.id}
                      >
                        <Link
                          href={"/our-service/1"}
                          className={` hover:translate-y-[-5px] hover:shadow hover:bg-sky-100 duration-300 flex items-center gap-5 bg-[#f2fbff] rounded-lg border border-[#80D5FF] py-4 px-4`}
                        >
                          {/* Image  */}
                          <Image
                            src={work?.img}
                            alt={work?.title}
                            className=" w-[85px]"
                          />

                          {/* Title  */}
                          <div className=" space-y-2">
                            <Typography
                              component={"h3"}
                              className=" font-rubik text-secondary-color sm:text-[19px] text-[18px] font-medium leading-[27px] line-clamp-1"
                            >
                              {work?.title}
                            </Typography>

                            <Typography
                              component={"p"}
                              className="paragraph leading-[22px] pb-1 line-clamp-3"
                            >
                              {work?.desc}
                            </Typography>
                          </div>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </div>
              </div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>

        {/* Benefit of Service */}
        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={1} />
            <Grid item xs={10}>
              <div className=" flex gap-16 max-lg:gap-10 max-lg:flex-col-reverse items-center">
                {/* How We Work  */}
                <div className=" w-[45%] max-lg:w-full space-y-8">
                  <div>
                    <Typography
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      component={"h3"}
                      className=" heading-secondary mb-2"
                    >
                      Benefit of Service
                    </Typography>

                    <Typography
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      component={"p"}
                      className="paragraph"
                    >
                      Sed ut perspiciatis, unde omnis iste natu volupta temaccu
                      santium doloremque laudantium, totam rem quae ab illo
                      inventore veritatis.
                    </Typography>
                  </div>

                  <div className=" space-y-5">
                    <Typography
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      component={"p"}
                      className=" font-rubik text-secondary-color sm:text-[18px] text-[16px] font-normal"
                    >
                      Clearance and compliance service
                    </Typography>
                    <Typography
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      component={"p"}
                      className=" font-rubik text-secondary-color sm:text-[18px] text-[16px] font-normal"
                    >
                      Saving Time to Deal with commodo iaculis
                    </Typography>
                    <Typography
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      component={"p"}
                      className=" font-rubik text-secondary-color sm:text-[18px] text-[16px] font-normal"
                    >
                      Automate your business elis tristique
                    </Typography>
                    <Typography
                      data-aos="fade-up"
                      data-aos-delay="150"
                      data-aos-duration="1200"
                      data-aos-easing="ease-in-out"
                      data-aos-once="true"
                      component={"p"}
                      className=" font-rubik text-secondary-color sm:text-[18px] text-[16px] font-normal"
                    >
                      Saving Time to Deal with commodo iaculis
                    </Typography>
                  </div>
                </div>

                {/* Image  */}
                <div
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                  data-aos-once="true"
                  className=" w-[55%] max-lg:w-full"
                >
                  <Image
                    src={service4}
                    alt={"Benefit of Service"}
                    className=" rounded-md border w-full"
                  />
                </div>
              </div>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Grid>
    </>

      {/* navbar logo svg  */}
      {/* <NavbarLogoSvg
                  width={
                    windowWidth > 1024
                      ? "220"
                      : windowWidth > 640
                      ? "200px"
                      : "180px"
                  }
                  height={
                    windowWidth > 1024
                      ? "71"
                      : windowWidth > 640
                      ? "65px"
                      : "60px"
                  }
                /> */}

      {/* Our Networks  */}
      {/* <div className="pb-20 max-md:pb-16 pt-16 max-sm:pt-14">
        <Typography
          component={"h3"}
          className=" heading-primary text-center mb-10"
        >
          Our Networks
        </Typography>

        <div>
          {networks?.map((network) => (
            <div key={network?.id} className="mb-8">
              <Grid container justifyContent={"center"} gap={2}>
                {network?.images?.map((img) => (
                  <Grid
                    key={img?.id}
                    data-aos="zoom-in"
                    data-aos-delay="50"
                    data-aos-duration="2000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="true"
                    item
                    md={2.8}
                    sm={2.7}
                    xs={5.6}
                  >
                    <Image
                      src={img?.img}
                      alt={network?.title}
                      className=" rounded"
                    />
                    <Typography
                      component={"p"}
                      className=" font-rubik text-secondary-color max-md:text-[14px] text-center mt-2"
                    >
                      {img?.title}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </div>
          ))}
        </div>
      </div> */}
    </>
  );
};

export default WorthServicesCompo;

// .whatWeDoRight:after {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 80vw;
//     /* half viewport width */
//     height: 100%;
//     /* parent height */
//     background: #e5f4fb;
//     z-index: -1;
//     /* push under parent */
//   }
