import './static/css/Cats.css'
import Cat1 from './static/images/cat1.jpg'
import Cat2 from './static/images/cat2.jpg'

function Cats() {
    return (
        <div className="cats">
            <div class="card__right">
                <img class="card__pic__right" src={Cat1} alt="Cats" />
                <h2 class="card__title">Cats</h2>
                <div class="card__text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi voluptas tempora distinctio expedita, atque suscipit nisi quam aliquid tempore sapiente cupiditate odio molestias deserunt harum placeat repudiandae quis eius cumque quidem quos! Natus laudantium dolores illum eius, hic sint aut architecto quasi vel possimus itaque culpa numquam earum reiciendis minus accusamus fugiat! Neque cupiditate illo voluptas animi nesciunt consequuntur deserunt maiores vitae minus, recusandae quo saepe ratione, necessitatibus cumque maxime molestias eveniet alias sapiente incidunt, enim dolores architecto? Repellat vel consequatur ea enim quis autem temporibus alias, velit explicabo numquam itaque quaerat, earum doloremque omnis voluptatum similique, eveniet ipsum beatae at minima a aspernatur magni. Molestiae non quaerat esse? Cum eum hic aspernatur facilis nemo distinctio praesentium iure dolor qui expedita delectus!</div>
            </div>
            <div class="card__left">
                <img class="card__pic__left" src={Cat2} alt="Cats" />
                <div class="card__area">
                    <h2 class="card__title">Cats</h2>
                    <div class="card__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse odio quaerat vel! Repellat officiis assumenda eligendi sunt provident iste deserunt omnis! Facere aliquid atque ipsam! Autem fugit consectetur distinctio repellat ratione quisquam error alias libero. Quidem est iste quam sapiente mollitia doloremque blanditiis sunt facilis enim ut ipsa, fugit labore id voluptatibus? Tempora perferendis ad culpa. Quis nulla praesentium dolorem a deserunt ducimus tempore alias deleniti animi fugit labore, eum nobis minus minima unde neque expedita ipsa non dolor officiis, distinctio eius. Laborum, odio provident. Hic non sint voluptate nostrum consequuntur, in, inventore vero ipsa ea voluptates illo. Odio impedit magnam aliquam doloremque quidem. Reprehenderit dignissimos architecto reiciendis nobis, pariatur perferendis. Vero officia corrupti quaerat ipsum mollitia facilis in quis reprehenderit unde, animi incidunt molestiae!</div>
                </div>
            </div>
        </div>
    );
}

export default Cats;