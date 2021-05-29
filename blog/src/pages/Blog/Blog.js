import React from 'react'
import './Blog.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';ß

function Blog() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

    return (
        <div className="blog-container">
            <h1>Núi langbiang</h1>
                <h4>Huyền thoại (lịch sử)</h4>
                    <p>Langbiang – là hai tên ghép từ câu chuyện của chàng K’lang và nàng H'biang theo truyền thuyết của dân tộc K’Ho.</p>
                    <img className="blog-img" src="./images/1.jpg" alt="historyImg"/>
                    <p>Câu chuyện tình của chàng K’lang (người Lát, một nhánh của dân tộc K’Ho) và người con gái tên H'biang (người Chil, một nhánh khác của dân tộc K’Ho) đã làm xúc động bao du khách khi đặt chân đến đây. Nhà K’lang và H'biang đều ở dưới chân núi, họ tình cờ gặp nhau trong một lần lên rừng hái quả. H'biang gặp nạn và chàng K’lang đã dũng cảm cứu nàng thoát khỏi đàn sói hung dữ. Một lần gặp gỡ nhưng cả hai đã cảm mến, rồi họ đem lòng yêu nhau.</p>
                    <p>Nhưng do lời nguyền giữa 2 tộc người mà H'biang không thể lấy K’lang làm chồng. Vượt qua tục lệ khắt khe và lễ giáo, hai người vẫn quyết tâm đến với nhau. Họ trở thành vợ chồng rồi bỏ đến một nơi trên đỉnh núi để sinh sống. Khi H'biang bị bệnh, K’lang tìm mọi cách chữa trị nhưng không khỏi. Chàng đành quay về báo cho buôn làng để tìm cách cứu nàng.</p>
                    <p>Kết thúc câu chuyện, H'biang bị chết do nàng đỡ mũi tên có tẩm thuốc độc của buôn làng nhắm bắn K’lang. Đau buồn khôn xiết, K’lang đã khóc rất nhiều, nước mắt chàng tuôn thành suối lớn, ngày nay gọi là Đạ Nhim (suối khóc). Sau cái chết của hai người, cha Biang rất hối hận, đứng ra thống nhất các bộ tộc thành một dân tộc có tên là K’Ho. Từ đó các đôi nam nữ trong làng dễ dàng đến với nhau.</p>
                    <p>Ngọn núi cao ở làng La Ngư Thượng, nơi chàng K’lang và nàng H'biang chết được đặt lên là Lang Biang - tên ghép của đôi trai gái, để tưởng nhớ hai người và tình yêu của họ.</p>
        
                <h4>Giới thiệu về núi</h4>
                    <p>Núi Langbiang Đà Lạt có lẽ là một trong những cái tên rất quen thuộc đối với rất nhiều quý du khách. Dù là những du khách chưa có dịp đặt chân đến với Đà Lạt. Hay những du khách đã có dịp đến với nơi đây rồi. Hoặc là những du khách đến với Thành phố ngàn hoa xinh đẹp này rất nhiều lần đi chăng nữa. Thì có lẽ núi Langbiang là một trong những địa điểm không thể nào bỏ qua được.</p>
                    <p>Có lẽ cũng chính vì vậy mà Langbiang được quý du khách trong và ngoài nước. Bình chọn là 1 trong 5 địa điểm du lịch tuyệt vời nhất tại Đà Lạt. Không những vậy nơi đây còn được mệnh danh là nóc nhà của Đà Lạt. Cho nên hầu hết tất cả quý du khách khi lựa chọn đến với Đà Lạt để tham quan và du lịch. Cũng đều muốn một lần đặt chân đến với ngọn núi này. Để khám phá vẻ đẹp, cảnh sắc thiên nhiên thơ mộng,…</p>
                    <p>Núi Langbiang Đà Lạt là một trong những địa điểm tham quan, du lịch lâu đời bậc nhất tại Thành phố Đà Lạt. Không những vậy, ngọn núi này được mệnh danh là “nóc nhà của Đà Lạt”. Đứng trên đỉnh núi quý du khách có thể ngắm nhìn toàn cảnh Thành phố sương mù ở phía xa xa. Với một khung cảnh tuyệt đẹp, rất thơ mộng và lãng mạn.</p>
                    <p>Không chỉ có quan cảnh đẹp, thơ mộng và lung linh. Mà ngọn núi này còn gắn liền với những truyền thuyết. Gắn liền với sự biểu trưng cho tình yêu bất diệt. Đặc biệt đó là truyền thuyết của người đồng bào dân tộc K’ho. Một truyền thuyết gắn liền với một tình yêu thủy chung son sắc của cặp đôi trai tài gái sắc. Đó chính là chàng K Lang và nàng H Biang.</p>
                    <p>Cho nên ngày nay khi du khách đến với nơi đây dù là tham quan hay đi nghỉ dưỡng. Thì cũng đều được nghe kể về câu truyện, về truyền thuyết của ngọn núi này.</p>
                    <img className="blog-img" src="./images/2.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/3.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/4.jpg" alt="introImg"/>

                <h4>Núi Langbiang có gì hấp dẫn?</h4>
                    <p>Tại Langbiang có rất nhiều địa điểm để tham quan. Những địa điểm ở đây rất độc đáo gần như chỉ có ở Đà Lạt. Không chỉ thế nơi đây còn có nhiều trò chơi cho những ai ưa cảm giác mạnh lựa chọn.</p>
                    <p>Ngoài ra khi đến đỉnh núi này các bạn còn được hòa mình vào thiên nhiên núi rừng. Có thể ngắm trời, ngắm mây và còn ngắm được toàn cảnh thành phố Đà Lạt.</p>
                    <p>Sau khi leo được lên tới đỉnh Ra-đa của Langbiang. Tại nơi đây với nhiều khu nghỉ dưỡng cao cấp cho các bạn lựa chọn. Cùng với những dịch vụ hữu ích cho du khách. Ở đây có riêng một khu để bạn cắm trại và nghỉ qua đêm. Ở đỉnh núi này vào ban đêm rất tuyệt đó các bạn ơi.</p>
                    <p>Các bạn có biết cái cảm giác ngồi bên ánh lửa, uống chút rượu cần. Nghe những tiếng nhạc du dương vang lên từ các nhạc cụ cổ của người Lạch. Reo hò, ca hát, nhảy múa cùng nhau suốt đêm. Khi đêm xuống các cô gái người Lạch ngồi dệt thổ cẩm bên ánh đèn. Cái cảm giác ấy tuyệt vời lắm đó các bạn.</p>
                    <p>Các bạn có thể mua những loại đồ dùng của người Lạch tạo đây. Như chiếc gùi, tại đây ta có thể sắm cho mình những mảnh thổ cẩm đẹp. Với nhiều màu sắc khác nhau để trang trí cho gia đình hoặc khoác lên cho bản thân.</p>
                    <img className="blog-img" src="./images/5.jpg" alt="introImg"/>

                <h4>Các trò chơi được ưa thích ở núi Langbiang</h4>
                    <strong>Đi xe Jeep</strong>
                    <p>Từ chân núi LangBiang, du khách sẽ đi xe Jeep lên đỉnh núi để tham gia nhiều hoạt động vui chơi giải trí khác. Giá vé thuê một chiếc xe Jeep là 300.000 đồng/xe cho cả vòng đi và vòng về.  Một xe có thể đi từ 5- 6 người, bạn có thể đi ghép với những người khác hoặc thuê nguyên xe để đi.</p>

                    <strong>Dù lượn</strong>
                    <p>Đỉnh LangBiang Đà Lạt có gì? Câu trả lời là ở đây có rất nhiều hoạt động vui chơi và dịch vụ tiện lợi. Một trong những trò chơi mạo hiểm được nhiều du khách yêu thích nhất khi tới đây là trò dù lượn. Điểm bắt đầu trò chơi là đỉnh Rada và kết thúc tại hồ Đan Kia.</p>

                    <strong>Leo núi chinh phục đỉnh đồi Rada, đỉnh núi Bà</strong>
                    <p>Đây là trò chơi đòi hỏi người chơi có thể lực tốt và sự kiên trì cao. Đường lên đỉnh núi khá khó đi nhưng bù lại cảnh sắc rất đẹp.</p>

                    <strong>Ăn uống, vui chơi dưới chân núi</strong>
                    <p>Dưới chân núi có rất nhiều dịch vụ ăn uống, vui chơi với đa dạng các món ăn. Du khách có thể chọn riêng biệt tour du lịch Đà Lạt 1 ngày trải nghiệm không gian văn hóa cồng chiêng, được đốt lửa trại, uống rượu cần và nghe tiếng cồng chiêng.</p>

                    <strong>Chụp hình checkin trên đỉnh núi</strong>
                    <p>Trên đỉnh núi, du khách có thể cưỡi ngựa và chụp hình hoặc ghé thăm vườn hoa nơi có tượng Lang và Biang để checkin.</p>

                    <strong>Uống cafe, ngắm mây, cưỡi ngựa</strong>
                    <p>Nếu bạn đã có chút thấm mệt khi tham quan núi LangBiang, bạn có thể ghé đến quán cà phê,vừa uống cafe vừa ngắm thành phố Đà Lạt bên dưới.</p>

                    <strong>Mua sắm đặc sản, đồ lưu niệm</strong>
                    <p>Du khách có thể mua những thức ăn đặc sản và đồ lưu niệm Đà Lạt cho bạn bè và người thân tại các quầy hàng dưới chân núi LangBiang.</p>
                    <Carousel responsive={responsive} itemClass='carousel-item'>
                    <img className="blog-img" src="./images/6.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/7.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/8.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/9.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/10.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/11.jpg" alt="introImg"/>
                    </Carousel>

                <h4>Review về núi</h4>
                    <p>Sau đây là một bài viết từ một vị khách du lịch đã nêu cảm nhận sau chuyến tham quan núi Langbiang, chúng tôi xin chia sẻ đến các bạn : “CẢM NHẬN LANGBIANG”</p>
                    <p>Sau một đêm dài ngon giấc trong bầu không khí se lanh, dịu dàng của màn đêm Đà Lạt yên tĩnh, mở choàng mắt đã thấy ánh nắng ban mai chiếu vào phòng chói chang (vì căn phòng của mấy anh em nhà mình có cửa mở về hướng phía Đông).</p>
                    <p>Bước ra khỏi phòng đã thấy bà chủ khách sạn đang tưới hoa trên ban công. Có những loại hoa màu tim tím, sang sáng mà mình cũng chẳng biết tên là hoa gì nữa. Nhưng cần gì phải bận tâm đâu, vì mới buổi sớm vừa ra khỏi cửa đã thấy màu hoa, mùi hoa cũng đủ đem đến cho mình một cảm giác vui vui, là lạ rồi!</p>
                    <p>Dự định ban đầu trong lịch trình là 7h phải ăn sáng xong. Ấy vậy mà do mấy cô nàng còn phải “vôi ve” hơi lâu nên mãi đến 7h20 mới xuất phát được. Ăn sáng ở nhà hàng có cái tên quen quen: Tâm Châu. Không biết là do nhiều người thích một cái tên hay là cùng một hệ thống nhà hàng của ông chủ mà có sự trùng hợp này?</p>
                    <p>Theo lời cậu Vũ – hướng dẫn viên thì sáng nay đoàn sẽ đi thăm đỉnh Langbiang. Uống cà phê sáng ở một quán khá đẹp có mặt tiền trông ra hồ Hồ Xuân Hương. Li cà phê sữa của Đà Lạt gì mà cà phê chẳng thấy đâu toàn sữa với sữa! Lại phải đợi lâu quá! Chợt nghĩ có khi cái phong cách rề rà này lại có cái lí do rất chính đáng là để “có thời gian cho du khách ngắm cảnh hồ”?</p>
                    <p>Trên đường đi đến Langbiang, đoàn được nhà xe cho “đổ bộ” xuống một quán đặc sản dâu tây Đà Lạt có cái tên khá gợi: ” Hoài Nam”. Quán bán nhiều đặc sản Đà Lạt, mỗi thứ lại được găm sẵn mảnh đề can in mã vạch, giá tiền cho từng loại sản phẩm hệt như trong các siêu thị. Cả đoàn ào vô quán nếm các thứ mứt rồi tíu tít đi xem, chọn mua đặc sản: nào cao Actiso; nào mứt oliu; mứt dâu tây, dâu ta, sen sấy, trà ô long…</p>
                    <p>Ai cũng hớn hở vì đến được cửa hàng chính hãng, mua hàng chính hiệu. Quan sát, nhẩm sơ sơ, mình thấy chỉ nguyên hai đoàn khách khác cùng vào mua một lúc với đoàn nhà mình đã đem lại cho cửa hàng này khoản thu ngót nghét 7 – 8 triệu đồng! Nhưng cái cảm giác hớn hở ấy không tồn tại được lâu mà nhanh chóng tan như bóng bóng xà phòng khi ghé qua chợ trung tâm thành phố Đà Lạt. Nhiều cô giáo thừ mặt ra khi biết một gói sen sấy tại đây chỉ có giá 15.000vnđ (trong khi tại cửa hàng chính hiệu hồi nãy là 25.000vnđ!). Một gói mứt dâu tây y chang (hồi nãy đề giá 45.000 vnđ) thì đây chủ hàng chỉ nói 25.0000 VND! Ôi chao! Đoàn mình bị trúng quả lừa to rồi! Không khéo còn bị cả hướng dẫn viên “đi đêm” vào với cửa hàng để cùng nhau “làm thịt” nữa!</p>
                    <p>Trái lại với vẻ thiểu não của mấy cô, cánh đàn ông bọn mình vẫn cười khơ khớ mà bảo nhau: “Du lịch mà! Sợ tốn tiền thì đã ở nhà, không đi! Mà đã là hàng giá cao thì tiền nào của nấy thôi! Với lại, của một đồng công một nén. Cái công mình đem về từ Đà Lạt đến tận nhà cho vợ (chồng) con thưởng thức thì sao tính được là bao nhiêu tiền?!!”</p>
                    <p>Nói thì nói cho vui vậy thôi chứ thấy vẻ mặt kém vui của mấy cô mà lại thấy tồi tội! Nghe mình động viên: “Thôi! Coi như một lần đi học cho bớt cái dại trong người đi. Lần sau mình có đến nơi này thì chúng nó hãy quên cái vụ lừa đảo này đi nhé!”, mấy cô giáo cũng dần vui vẻ trở lại.</p>
                    <p>Đường đến đỉnh LANGBIANG khá tồi. Sau một hồi khoảng 1 tiết ngồi xe nhảy chồm chồm như cóc, ngắm bụi đường bay mù mịt, đoàn cũng đã đến chân núi Langbiang! Nghỉ giỗ Tổ có 1 ngày thôi mà sao thiên hạ bảo nhau kéo đến đây đông đến thế? Khó khăn lắm mới đậu được xe.</p>
                    <p>Xuống xe, cảm nhận đầu tiên của mình là: dịch vụ ở đây có lẽ do tư nhân tự phát làm ăn, không có định hướng quy hoạch nên rất kém và lộn xộn. Nhà cửa đàng hoàng không có cái nào đã đành, ngó đến quán xá thấy toát lên vẻ tạm bợ, hàng hóa thì đơn điệu, nghèo nàn; lại không có chỗ nào mát mẻ. lịch sự để ngồi nên các du khách chỉ có bài đứng giữa trời nắng hoặc giở dép ra ngồi bệt xuống mặt đất cho nó ra vẻ “thiên nhiên”!</p>
                    <p>Ngước mắt nhìn lên lưng chừng núi, dòng chữ LANGBIANG to tướng bằng bê tông quét sơn trắng trông khá nổi bật trên triền đồi cỏ phủ xanh. Mấy chục chiếc xe kiểu xe Jeep được sơn cùng một màu vùn vụt chạy lên, chạy xuống như con thoi. Phải vào đăng kí vé xe và ngồi chờ đợi hơn 1 tiếng mới đến lượt đoàn mình lên xe (mỗi xe chở từ 7-8 người/lượt).</p>
                    <p>Ngồi trên chiếc xe hối hả, vùn vụt chạy lên đỉnh đồi, cua những khúc cua ngắn, liên tục lên dốc mà có cảm giác rờn rợn còn hơn cả khi ngồi cáp treo lên đỉnh Bà Nà! Hai bên đường, những cây thông thân to hàng ôm, cao vút trập trùng uốn theo chiều dốc đứng cũng như vùn vụt chạy qua như muốn cùng đua tốc độ! Thoáng vụt qua bóng vài du khách cưỡi ngựa thả bộ theo triền thông. Lại có khá nhiều cặp đôi nam nữ trẻ thắt áo khoác ngang eo, nắm tay nhau nhẫn nại leo lên đỉnh như thể muốn cũng nhau chinh phục tình yêu làm cho khung cảnh có phần khá lãng mạn.</p>
                    <p>Sau khoảng hơn chục phút rờn rợn theo từng khúc cua với bác tài, cuối cùng chúng tôi cũng lên được đỉnh núi cao nhất Lâm Đồng. Đứng trên đỉnh cao nhìn xuống: thành phố Đà Lạt xa xa nằm dưới thấp với những dòng sông, suối, mặt hồ lấp loáng sáng quả đúng như câu thơ Bác Hồ xưa từng viết: ” Vạn lí dư đồ, cố miện gian” (Thu vào tầm mắt muôn trùng nước non).Nhìn về hướng đông bắc xa xa, cũng ẩn hiện ba quả núi xanh khá cao như ngạo nghễ đua cùng Langbiang.</p>
                    <p>Quả là hùng vĩ nước non ta! Lại chợt nghĩ: non sông nước Việt nhiều nơi có bao cảnh trí đẹp đẽ như (có khi hơn) thế này, vậy mà có bao người vẫn chỉ bằng lòng suốt đời với việc được “du lịch qua màn ảnh nhỏ” mà thấy hơi chạnh lòng!</p>
                    <p>Lang biang nghĩa là gì? Quần thể tượng đá trắng đặt trên đỉnh cao nhất của quả núi này cho mọi người câu trả lời qua một tấm bia đá tóm lược thiên tình sử bi thương của chàng Lang và nàng Biang vốn thuộc hai bộ tộc khác nhau và bằng quần thể tượng một đôi bạn tình khỏe khoắn, đẹp đẽ.</p>
                    <p>Tượng tạc một đôi thanh niên trẻ: một chàng trai khỏe mạnh, vạm vỡ, đóng khố, vai đeo bao tên, tay phải cầm cây gậy trong tư thế nửa đứng nửa ngồi trên tảng đá phía bên này đang chìa tay trái nắm lấy tay phải người con gái trẻ ở phía đối diện, cô gái có mái tóc mây bồng bềnh, mặc váy, ngực trẻ căng tràn, để trần, sau lưng đeo chiếc gùi đứng phía tảng đá bên kia như thể để cô bước sang bên này sao cho an toàn.</p>
                    <p>Có lẽ đây là lần đầu tiên trong đời, mình nhìn thấy và thích thú đứng ngắm mãi một công trình điêu khắc đẹp cả về dáng vẻ, về tư thế, về từng nét chạm khắc lẫn ý nghĩa nhân sinh! Không biết ai là tác giả của công trình này? Mấy đứa bọn mình đứng ngắm mãi bức tượng đôi trai gái mà quên cả cái nắng gắt giữa trời trưa cao nguyên chói chang. May mà mình không quên chụp vài tấm hình làm kỉ niệm trước quần thể điêu khắc đẹp đẽ này. Tự nhiên trong lòng lại nảy ra sự so sánh bức tượng này với những bức tượng ở thác Pren hay ở vườn hoa trung tâm thành phố Đà Lạt. Trong cảm nhận của mình, những bức tượng ở đây rõ ràng có thần thái và ý nghĩa sâu xa hơn rất nhiều!</p>
                    <p>Chỉ có 30 phút để ngắm nghía cảnh quan và mọi thứ khác của Langbiang (giống y như thời gian mà bác lái xe dành cho cuộc trò chuyện giữa anh thanh niên với ông họa sĩ già và cô kĩ sư trẻ trong thiên truyện” Lặng lẽ Sapa” của Nguyễn Thành Long!). Mà thực sự điểm du lịch trên đỉnh núi này cũng chẳng có gì khác so với dưới chân núi kia? Cũng chỉ là leo lên đỉnh núi, ngắm cảnh, nhìn nhau, chụp vài pô ảnh rồi … lũ lượt xuống núi, chứ có muốn nghỉ lại đây cũng làm gì có phòng trọ chứ đừng nói là khách sạn!</p>
                    <p>Còn anh chị cảm thấy đói ư? Hãy vui vẻ mua vài gói bánh quy hay vài gói Oishi hay mấy cây xúc xích, xiên thị nướng mà lót dạ cho đỡ đói lòng để còn đủ sức mà xuống núi! Chợt nghĩ: sao lãnh đạo nghành du lịch Lâm Đồng không chịu đi học nghành du lịch Đà Nẵng một chút nhỉ? Bà Nà chắc gì đã mát, đã đẹp hơn ở đây, nhưng tại sao trên ấy người ta xây dựng cả khách sạn 4-5 sao? Rồi có cả một khu giải trí xứng đáng với tên gọi “thiên đường trò chơi”. Vậy mà ở đây, du khách muốn nghỉ lại qua đêm thì sao? Chẳng lẽ anh lại bảo người ta :” Hãy chịu khó mang theo lều trại mà tự dựng lấy?”. Còn nếu bảo rằng mục đích đến đây chỉ là để ngắm cảnh thì liệu du khách nào có đủ can đảm đến ngắm vài mươi lần trong đời không?</p>
                    <p>Hết 30 phút “lên đỉnh” với Langbiang, cả đoàn lại lục tục lên xe jeep để “hạ sơn”. Lại tiếp tục được trải nghiệm cái cảm giác rờn rợn theo từng vòng cua gấp gáp của bác tài xế. Có lẽ ai cũng cần một chút máu mạo hiểm và đặc biệt là không yếu tim khi tham gia vụ này! Đúng là:</p>
                    <p>” Chưa đi, chưa biết Langbiang.
                        Đi rồi mới thấy chẳng sang, không hèn!
                        Dẫu quan khách muốn tiêu tiền
                        Hãy về Đà Lạt, chớ phiền chúng tôi!
                        Chúng tôi lấy tiền xe thôi
                        Còn các khoản khác, chịu thôi, đỡ tiền!” 
                    </p>
                    <img className="blog-img" src="./images/12.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/13.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/14.jpg" alt="introImg"/>

                <h4>Kinh nghiệm tham quan núi</h4>
                    <p>Bạn chuẩn bị sức khỏe, nạp đầy năng lượng. Nhớ mang theo nước uống bởi đi bộ leo núi rất xa và khí hậu núi cao sẽ rất khắc nghiệt.</p>
                    <p>Cần lên lịch trình leo núi từ sáng sớm là lý tưởng nhất. Bởi bạn sẽ chủ động được thời gian và có tâm thế tốt nhất cho hành trình.</p>
                    <p>Trang phục leo núi cần gọn gàng. Cần mang thêm áo ấm và đôi giày có độ bám tốt, bao tay, nón đội đầu.</p>
                    <p>Hành lý mang theo cần chuẩn bị sao cho đầy đủ và nhẹ nhất có thể. Một số vật dụng quan trọng không thể thiếu: điện thoại định vị GPS, bật lửa, dao, gậy, đồ dùng sơ cứu…</p>
                    <p>Nên đi theo đội nhóm để hỗ trợ lẫn nhau mỗi khi gặp thử thách, khó khăn</p>
                    <img className="blog-img" src="./images/15.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/16.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/17.jpg" alt="introImg"/>

                <h4>Một số hình ảnh đẹp </h4>
                <Carousel responsive={responsive} itemClass='carousel-item'>
                    <img className="blog-img" src="./images/18.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/19.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/20.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/21.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/22.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/23.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/24.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/25.jpg" alt="introImg"/>
                    <img className="blog-img" src="./images/26.jpg" alt="introImg"/>
                </Carousel>

        </div>
    )
}

export default Blog
