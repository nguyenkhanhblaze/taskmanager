<template>
    <UButton color="neutral" variant="outline" ref="buttonRef" class='group relative w-auto cursor-pointer overflow-hidden rounded-full border bg-background p-2 px-6 text-center font-semibold'
    )
        ">
        <div class="flex items-center gap-2">
            <div class="size-2 scale-100 rounded-lg bg-primary transition-all duration-300 group-hover:scale-[100.8]">
            </div>
            <span
                class="inline-block whitespace-nowrap transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
                <Icon name="simple-line-icons:check" />
            </span>
        </div>

        <div
            class="absolute top-0 z-10 flex size-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
            <span class="whitespace-nowrap">{{ text }}
            <Icon name="simple-line-icons:check" />


            </span>
        </div>
    </UButton>
</template>

<script lang="ts" setup>
import { ref } from "vue";

interface Props {
    text?: string;
    type?: string;
}
const props = withDefaults(defineProps<Props>(), {
    text: "Button",
});

const text = ref('');
if (props.type == 'c') {
    text.value = 'Complete'
}
const buttonRef = ref<HTMLButtonElement>();
</script>

<style></style>