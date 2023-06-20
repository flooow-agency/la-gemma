<?php
    $gallery_position = get_sub_field('gallery_position');
    $gallery = get_sub_field('gallery');
    $title = get_sub_field('title');
    $text = get_sub_field('text');
    $button = get_sub_field('button');
?>

<?php if ($gallery) : ?>
    <section class="text-gallery">
        <div class="container">
            <div class="text-gallery__wrap d-flex flex-wrap align-items-center justify-content-between">
                <div class="text-gallery__slider js-slider <?php echo $gallery_position === 'left' ? 'order-1' : 'order-1 order-lg-2'; ?>">
                    <?php foreach ($gallery as $image) : ?>
                        <div class="text-gallery__slider-item">
                            <img src="<?php echo $image['url']; ?>"
                                 alt="<?php echo $image['alt'] ?: $image['title']; ?>">
                        </div>
                    <?php endforeach; ?>
                </div>
                <?php if ($title && $text) : ?>
                    <div class="text-gallery__content <?php echo $gallery_position === 'left' ? 'order-2' : 'order-2 order-lg-1'; ?>">
                        <div class="text-gallery__title">
                            <?php echo $title; ?>
                        </div>
                        <div class="text-gallery__text">
                            <?php echo $text; ?>
                        </div>
                        <?php if ($button) : ?>
                            <div class="text-gallery__btn">
                                <a href="<?php echo $button['url']; ?>" class="button button-green">
                                    <?php echo $button['title']; ?>
                                </a>
                            </div>
                        <?php endif; ?>
                    </div>
                <?php endif; ?>
            </div>
        </div>
    </section>
<?php endif; ?>
