function Banner() {
    return (
        <div className="bg-[url(./assets/bank-tree.jpeg)] bg-cover bg-[0_-50px] tablet:bg-[0_33%] bg-no-repeat h-[300px] tablet:h-[400px] relative">
            <section className="relative tablet:absolute top-8 tablet:top-12 tablet:right-12 w-64 tablet:w-[364px] bg-white p-8 text-left my-0 mx-auto tablet:m-8">
                <h2 className="sr-only">Promoted Content</h2>
                <p className="font-bold text-base tablet:text-2xl leading-4">No fees.</p>
                <p className="font-bold text-base tablet:text-2xl leading-4">No minimum deposit.</p>
                <p className="font-bold text-base tablet:text-2xl leading-4">High interest rates.</p>
                <p className="text-sm tablet:text-xl leading-4 mt-3">Open a savings account with Argent Bank today!</p>
            </section>
        </div>
    )
}

export default Banner;