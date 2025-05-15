import { OFFER_ITEMS } from "../../../utils/constant"

const Offer = () => {
  return (
    <section className="bg-gray-50 py-16 sm:py-24">
      <div className="m-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Section Title */}
          <div className="mb-4 flex items-center justify-center">
            <div className="h-1 w-12 bg-green-600"></div>
            <h2 className="mx-4 text-center text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              {OFFER_ITEMS.title}
            </h2>
            <div className="h-1 w-12 bg-green-600"></div>
          </div>

          <p className="mb-16 max-w-2xl text-center text-gray-600">
            {OFFER_ITEMS.subtitle || "Discover our range of services designed to meet your needs"}
          </p>

          {/* Offer Items Grid */}
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {OFFER_ITEMS.offer.map((item, index) => (
              <div
                key={index}
                className="group flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-sm transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-50 p-4 transition-all duration-300 group-hover:bg-green-100">
                  <img
                    src={item.icon || "/placeholder.svg"}
                    alt={`${item.title} icon`}
                    className="h-12 w-12 object-contain"
                  />
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-green-600">
                  {item.title}
                </h3>

                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer
