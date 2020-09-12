


const Footer = () => (
    <>
     <div>
        <footer className="page-footer font-small blue">
            <div id="links">
                <a href="#" id="contact">Contact</a>
                <a href="#" id="about">About us</a>
                <a href="#" id="careers">Careers</a>
                <a href="#" id="map">Site Map</a>
            </div>
            <div className="footer-copyright text-center py-3" id="footer"> <div id="roman">© MMXX Copyright:</div>
             <a href="#" id="title">DeliveryJoint</a>
            </div>
        </footer>
        <style jsx>
            {`
        footer {
            background-image: url('data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTExMWFhUXGBcYFxgXFhUVFRUWGBcXFhcWHRUaHSggGBolHRUYIjEhJSkrLi4uGB8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAAIDBAYBBwj/xAA3EAABAwMCBAMHBQABBAMAAAABAAIRAwQhMUEFElFhcYGRBhMiobHR8DJCweHxFCNSYpIVFoL/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8As0eFP55cYnYDykldveHOAB/7fX8wtLUbIGM6HuRuq3E2fAIGd0Hl3tNUlxzufGJQa0qCHHoPqjntXQio7w/v7rOURiOpkoCnCbf3jhHX5LSurig1x/dEf0PugfB7r3DDUgFzsNHTv8/oqhuXPcS8zr4BBZrcRkgTM5PT81Vht/Iz+r9s7/dZ2q7lJjQTn1TK/EW4ZHwxk6ydZjZBcubsgknf+VQfcxkZP0VOtcEwBJjTVQPKCWtWJkk5P5KhYUwldptQdeVCzVTFMIhA7mTmhRMVmmgXKuFqc8pjig4HpByYSk0oJUgUznXeZA5ybyrhckXIEmPK45yagXMmEJxSAQNCc0rsJcqB4C6CkE0IJAVK0qNqeEHZSXUkH0cyrDS49JQqpxAETOJ117fyoLi5c+pyD9OR44XbSxIBaWmCTtsR90GQ9qafNL9pj6n6ysrZ05d2DSSeg6/Rb2pwWtzPZyy0kRJ0wcj1+SHV/ZJ7GlgPxHJgTjZsoM1Qrhz42ggDtn+VXruzAWnsfZB4MkkeUyrFx7G785nXQBBia+Z8D9EMvKeQewWxv/Z2qwkthw6aOE9ll7sYEjIkfNBRBx0CjLlJUChIQPanpjU/mQNlcK65qQYgY1vVWA5QFOQSFyje5JJyBicAuLgcgeV0JoKRcgT0wlcL0wuQdK4XLhcmygeHLpcowUpQScy4HJoKSB5cuh6ilJBYa9Pa9VgU9rkFnmSUYekg994a3ncKg6HHQrQUpOmD6eKzHDP+g0CZJ16DsEbseKseYGS0ZQW7gSJ2+fqq7KDY5nZI07jaVPUqCeVpkD6HMKGhXbIa8R327IGVuV7cR22AQ26oZnPfJ+iOVGATERqqHEMZxCATWtzPLEg6TqPNede21gAOcRIcebwMQfFejOujGMuOBO3dZT2zYDQeI+IST54QeaNcuuYulu6c0oGALqeWLjWEmAJJ0A3QROKTXSjtD2XqOHxODewEkeJ0Ck/+qP0DvXHzQBqVo4jmjB3UhsXxgStxwb2YeW/EIEIlX4FTptJMYGuyDyt2qjcjPG6DfeFzd/DpqhD2HogilKVbtOGVan6W46lWanAawExMeqAZK6EnsIMEEEdUgEDHBMKuW9oXnWB1+yJ0uBsIJJ9SAgzxXFb4hae7MAyFUQJJdSQJJJcQJdC4nAIOLoK4ncqBwcupBqSD3RwdUJAGNo++ytWdsaRyIDp8PDuUQs2nlA/SO2CVJdM+IDMRMHP4UA6xu5qEzEmCDvtIRerRP5sgl9auDpDCOkmcnZHm1nCmJO3rAAPzQVn/ABAicgKlVeC0gSSJGVFY8TBc9uQZ11lUeLvxDDmDoYJwUDmP1kRErD+0F9JLD+4H5f4EYtrl/M4Pk6a6evksTfXBe9zjqCR5ZH2QC3n5LgSeM+KaxBYY0laPhVo2h8TsvO3TsqPBKHKQ9wzsOndFLG0NTmfzQRMz5wPkgu0q76x5Q2BuciB1JRqycynAfprrqh/BqREgwR1mBPmr1a0qGDgydAZgeSC5e8VmIBgagHb0Ud9csqs5AIkdTlS+4LQJAnTXATTQBbkA58EGC4lw3kdluB+SCVb4fwihViWuHj/RhbKvTDxykDpr8lWsbBjJgH1kemyCa14OxrQInED7pv8A8e0SPr06orZVi17eYSCddgrd5a8w5xgyQPAoPM/azhlJpDoM9lnWW1PUk+i2XtTwus8iP06an7eCz7fZ6vswmTHT6oKTag0Yc9AMlMrCoMBhnvC9F4N7LNotBIlx1Oueg7IjXsmTHIDHWPsg8UuKNTVzT9foq69f4nwttRphoETkDI7rzzinCOWoMQDrHWM+CAGkiPFOFOowZDmncbHoQhyDqSQXYQcSXYShAgr9uwPZH7m48jp/I9FQAVrh8+8aOpjyKBjqTgYISXqNp7P0uRsgExrqkg9Dr0Q5wiANNlZ9wAQ4nKHV7N0gtdnuiVCgeXMGNczrqgg4i0OpvnQQR1j8EIY+8kHMCAOwKI8RqSx40xHT5LP21CTriDM77oLlKg0/FEdcbodxK3HMH+I8irF3eY5W+Hnsq3OC3lefPqgzvHKRo0ufYfX7rCUjOTvgrb+2FaKBpjIkGRpIPTUFYVuQgjuRBTadKXwrTKfOM6/kKNrocD0hBoKHJj42+sHTSCr/AAim6H+sfVX/AGa4ZSe0l7Q7WD8xkdirXGOH8rmlggdt8R/KCPh9oXhwbI3VynbVwIxjEzkaIhwpjBTz8D3bjMx+aok65B+GMgZmDpuEHLKlLQKkEx6qvfWwOgiMq1TrAR8OpnJym1apkt0zr80A+tTBy3XorVO0HXPqqNe7DcNgnQk6onYFsDA8ZQNpcMPNIflXmUXR8RnyU1NzZ2U7XN/1BQFu2c59Ere1YXTGmnZESAdk5tEAaIK9WiNtUOurSQZzj/EaqNEKtWpjLdz+AIM9RoFpk/6hftRwRj6fvKYHMM8vXwWmr0Iae38LG8a4u5joGR+77BBjr+3caFSRluvrhZYBelPayqx5b+5uR4LA17NzX8oG/ogqAK1SsajtG+qv0LUDQT36ohRoQJcY+UIAR4ZV/wC2fAhVn0iDBBB7rc8NtBVzGBvoU7ifCW1WEYDhp2QYRE/Z+2LqnMB+n6nRUq9q5jyxwgzH9+C1/CaTWshuIx9z4oNXa1HBjRI0SVBjjH6h80kGto8Va8uHNBBkeClteLFhILpBGOvhj1Xn9HiBzuQB4gduytC9ILTmDBBCDZ1uIB/MDtP3HyQu0e5xdOAw/wDsNj81Dwi4Dycb6yTjREazqQ+A6nA7dPmgFPuHl5GOXbb67KDi9eoOUMy4mP0jzUkuLvzPgr1Onytkt+ISW7yCMoM5e0H8n/VbBdidfBY+5oFj4XpXEKLarCGncSD+0wslx61EgxoYPlCCb2U4bTqc4cJO3pKF+0XCDRdzNzTdoeh3B6Fbz2Zg8ghucNMTGMeH+I5fcEY4w5rS12HCNTs7xQYv2Ju/g93qcEDyAK099ZvqNgGDgeA6Ipw/g1vbt+At8QADCkosaahI01+yCtacB5QJMiMZMyrjbZsnQOGqIB5cI9EPrUHwQ0gE9RogrVabSQAcqO5o51idR4JNoOaZOqV1R5gDPfzQCX2rP3E581M1xb8LHAjc7jyUFW3BcS4x02Tefl0KC+y6DRqpqV6TuI6iUIpsa50u13EY9dlxtaN/Dw7DYIDNTiL5+HIV9t24ET20WdsXuc8Q7A2Rtz9Sgvi5HN3CrvqOILtxn5qhagucXTpKdQqOhw3EfRBZr1y5pyIKxvHLZgJdsdR0K2fufgPyWW4xQJkfhQY73/unGDgmR0E6jwV3/gtqjmAAfH4PBU7mgWuAcCRsUWsPhmcDx17oBhoBmIiNf5KibZkuPT7o9VoNdtH1KjFMIJuGUuVh5R4fdTV2QJjB1TrCoJg6DH9qtxHiAaeWcHogEcd4QKjZb+oZB3hDuFXcEtdg7jv9j1WjZOJ8vsg/FrHmIcz4X7d+xQXW3UaELqzJuow4EHfMZSQF6zuV58Mev9KWw4ppTe2RmOo/pRXOZO4+h1VG0qxVb4/PZB6FZ0xTALTg6HfuD3Cp8VeeeWk9fFct6pJLTpJI7E/6o2VnB5a8S0aFBcpVSAHnVw6adRHXfzRWv+hrvP5aKg0tI5RkH4vCNVZsqodroRAG3b87oBdDijBUe1zYDoz16E9wZCnq2LavMCROS3v1EIde27m1iIw4EzGG6YjyV6zggZkxgg4kCEA+3tKlJ0CRmR2PULX0OLczIqa9RugT7twhtUAeY5vsnhodpp3MIL1WvLhGR0+6K2LCG6yUDtmBpkeqI2tyRk4CA7RHK0Aa6lcrVMSNVTt68znZQ/8AIDsDzCB1d+JVKq4uE9PHzKfVMvHxfCNR3Vh9UAGcCP8AP8QA68uPKBnCtCwcY0wE20e17pHzCI1RDO5QUqlEsY7m1E7zOBv5oI+qdeWY18ERvXQ0hzgCTPUlDbCkySJJ8R9kBPgbBJcFduXGSq9rbbtcAOm8oiLadCNEFKza4jXXHgN0Zt2QNPFR07cNAhTsMeaBARPQ/JCeJ2wgnrlG2UQVVubbEeKDIXto2qz/AMhjz2WUuLttOOZ2RiNVsLuk5r9CP5XnftPQ/wCuQNDnwnVBoKd7zM5mp4upMHcfNDLB/LS7beSY+r8UzogLNvBPl/Cr0arHyDsUOpXfM87QPKd0mGHyND06oNJb3QZgwW9FW4nXpuHM0GW6D7IcTJhV7ii/YoIn3jSZLQUlVfTJOWid8JICVXBgprrIucCDBEEqhb3PNg/6j1mCacZMGZ1gbIG2nGSypyjXcHcjstFeXDXtGY3Osg9EJs7ZvNJAdG5V4NbVJEadJQWOFVMlrsk4kTpOnipLxpaRA0P54KGk3kcImNB2UwqtcS3qgLXFuHNaNyJ+6o2NJhExAnA6QM+JRUUYZJnAwZ8kLNPkk6ydNBKCC6t2vJJIHTqQo2VIPK0CF2vckzMADJOojxO8qO1HM5zsafZBLdX3IQMeChur84aSZ2aNf6Q6HOqF0/p3T7W3yX6nbx6oNZwmtNPOuh+y7eUHB3w7nKqcLBAnYY80QNcZzJ3P2CBWNAMJLjJ9Y/tNvQXNIz26pxqAEayn0qo80As0H0yJP5srF5e8rTgxET3Uj6Zmdu+Sq13WYTyk/wBlADNq4zULiR31/IRDhts6cnMJ1c03QyRj6lX7Og1zpB7dggt0qPLt4qVtKTgQE+YEByeGnoEElOmf8Vmo0YChpPcNVYOUFem5wdCkrgmQk1mdVJKABxSkMl2ABPn1XmHG8uJPWQvW+NU+cBsb/JAq3ABqwCep/hB5+xtVjI5D5jWc6FDKt4+Y5B/6mfkvTH8OJcJEDE94HXyU54RTdhwA+R9UHnFhbVOYH3RaO4OfIp1zQfMGQJONFta/BGtPwknzMjzQa7tnsMEkg6b+SAE+kWicztGVao13D9TfUItaU5GQB9U57ADkGAO6Cq1rDn3U+QSXXh04021SQZe8otmWO8tD80RseKPpEbgxPlOVXewOlrtf2PGh6A+KVqzma4HUBx7yBP8ACA+zi4eWzAkHbTp/PqEZ4U0YfIjyzsvPuF3BD86fTZavhl38PLEEY/tBor6s1lMu66Y3QXhtWajZ0J5p3BGyV1esDS0uwdiqVletY4RoNNMzsg3lS452jo4A9pUT7YckO9ZiPNZ+24p7txBzTOWjWDvnYKY8WZVw0x6x89UCdaGoOUTyAjxJ6otZU6beZo2gfVUaNTl+HPWUy4ugzs4oLFaypMBAcMquyo0Q2I/NUNrfEZJJHYmPorAq0qYy0zGpKAo6uSAGCBKbw6k9zzOg379PmqXDbz9x12CO8PpveTHw6An7Dqg7WDzhoyPVWbOyqxJaZ+UIzbWga0CVLVO0wOyADxAcrZ6fJBaTZlxbgYHcrV3lEAeKE3tFrW4x4eCABRtfjwMnXGko/Spe7Z8I812xYzBwJHmVbrPacSI7IAwvOQ5mUZsLkOBKGVqDXmCTHWIhSUWBsieyAr72Y+SsUXxvsg1jd8xLZ0RKm9BcDhCgdVhMqu6KrVqZzhBLUqHphVazzBxhTCqIxunVXtLUELnNc3P9qG6pkgQFRr3Rc6AFbp1TGd0EFQkba/kob7RNAaDujDc5KBcddzEf9oQCbR31RGlyQA7O/gqNGn02V2hQOpCB/u+jcLqsAfkpIPNrlrfcOLX8zmOa10AxmYg/uHwn0UQvMzAJImDoSRlcu/goU2bvJqPHiIYPST/+kOeYKAxZtB2icK9e1CzI1G/5shdBzm0zUGQI+sfyuX3Ew9kTmOkIG1uMOcZPqFGOIgEHlJI6nHoEOSQaajxD3oguA7aAIhamP0NJG7ht2CyFmzme1vNyydei2dPjFGgwNpt53Dcn4QevcoNJZ0hTouq1ZbAJg69lkbjjHPNQuzsMYVW9vLi4z7xwGobMNJ8Tr5qjXsqvLkTJky7pjZA53GHTDXHxJIRzg9xUuXAvAa1oyR+8gaBZGlSl3KQfVbXhdQsDWtGwgTp3QaixtGMEvPxH5DVG7O+phuCI27lYS4u3kkzrjy/1EuE0C/l5ieQa9SegQeg/8kBozkhVa1eXQPVU/edsxjoBoozXgwMnfp4ILQc90jom31ueR3VWqD8CcfZOuND4IMRQv64c5ocIbIEjQDClHFq7dQw/JV6LgHOPXKrVrkIDVPi4cYeOU9shOvbqG8zSCPHZZ9rtCiBpl7NI0Qds76cg5Wgs+ITE/hWKa0sldocRcDBMdEHojrjooLgg53QDhV+ZhxRP32oQWKdQamCfontrCD+T2Ql5Iz2VSjWdJjSQgNcoJkJXDfRV/wDlgQDr0UNzcudGI6IG1rs6NHw/NQ1uQRzEeClDNvp1VGq8NOWSe6CSgGk4/pTVKaqjiAA/THkm3PFhERmUFh9IEzKSHi97u8tF1B51fvLng6DXwbMD5AKrWPMZHoiPtMxrKxpt0YGt6SQ0SY8TuhWiAnb3bWWr2fuqEeQBH2QpSVtj1CjQJJJJAlYpVgG8p0OZGoP86JCuDALRAGYAk95VilRpOzJHbH1JQHPZqiHcrnAO5cDYxgD6lEePsbzEjEBu+SN47rP8P4iWv5QABpr/AAjlxU94RMef3QQ0KTHEFzY8NQi9nZhzvhJjvA/lVbO13H1lHbNudACfVBRpWgL+WDqI6En/ABaK1pNlrRowZ8VTrV6dLGJOB6ST5D6qpZcRw8zkR8ygOvrQCe8LlN40nSPms7xPiZcByefiojfVA1x35dfCEGrF+Y9MpXHFmlpAM4iVjLi+e5oE+isWNaGw7P2Qcc1wHSDB+oKHXTCXY0RW5owJBnoN1TdMYBlBJbVAZjSD8kf4LW5saeP5hZ3hlm6ZOANletK/LvpCAtxixAyPTYrGcUaAeaCI+S1tzXLmQhVenIGZPggqcEuZaZJnUeA/laGjdgt5pyPXRATRiNj1AUtSoRn+YHogJOvMwFNUq8okDugttWyXPx+aK1Tv+eRgDZBI2pLgSTIMorIchttZbz/au0mGf4QTcmhBVa/hwj5oqykIiEM4gwtPZAJZSLWkkzBwqfu2uOTlEqrhkTAVJ9u4CQZBQRm5IwDhcTSR2SQZPjdAmrUcdQ9wPfMg+hQglJJA+q+YHQQo0kkCSSSQO0XaTJMT6rqSAnQ4eGw4vnpAKsf/ACnLjbwSSQOdxoty30iPmj3DPaFhYSDyuAzIJIx6FJJBnuP8Wc54AJgNO+TzY+g+at8HuD7t4nWP5SSQWnVyzknQ49d0QuX4A6iPlhJJBSY7lAd4qUcQM/CM7ykkgJWd4XRLQizmM0BgnxSSQQXtIsaYmTrlDqNYHzn1Gv0SSQWKFeQQCmU6J5gZXEkE1cZ/8Y81XrOAErqSCtxFktEGJyqvC67pgx0SSQFG3L5gDA7qzb3zphcSQGaN8YQ+9vo1mflCSSABUuHOM7agSrFOqeTMz1SSQUTzdl1JJB//2Q==') ;
            background-repeat: no-repeat;
            background-size: 100% 100%;
           
        }
       #footer {
           padding-top: 16px;
       }
       #title {
           color: black
       }
       #roman {
           font-family: Luminari, fantasy;
           font-size: 20px;
           color: black;
       }
       #title {
           font-family: Georgia, serif;
           color: black;
       }
       #links {
           padding-top: 9px;
           direction: inherit;
           display: block;
           font-family: Georgia, serif;
           font-size: 25px;
           margin-left: 5%;
           
       }
       #contact {
           color: black;
           padding: 5px;
           display: block;
       }
       #about {
           display: block;
           padding: 5px;
           color: black;
       }
       #careers {
           display: block;
           padding: 5px;
           color: black;
       }
       #map {
        display: block;
        padding: 5px;
        color: black;
       }
      
            `}
        </style>
    </div>
    </>

)

export default Footer;