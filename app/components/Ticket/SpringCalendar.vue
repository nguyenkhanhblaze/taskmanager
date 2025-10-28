<script setup lang="ts">
import { ref } from "vue";
import { Motion, MotionConfig } from "motion-v";
import TextMorph from "@/components/Ticket/TextMorph.vue";

interface CalendarEvent {
  title: string;
  day: string;
  time: string;
}

interface CalendarDay {
  processStatus: string;
  ticket: number;
  priority: string;
  events?: CalendarEvent[];
}

const calendarData = ref([
  {
    processStatus: "In Process",
    ticket: 1101,
    priority: "Hight",
    events: [{ title: "Party", day: "Tomorrow", time: "5:00 PM" }],
  },
  {
    processStatus: "In Process",
    ticket: 1102,
    priority: "Hight",
    events: [{ title: "Party", day: "Tomorrow", time: "5:00 PM" }],
  },
  {
    processStatus: "In Process",
    ticket: 1103,
    priority: "Hight",
    events: [
      { title: "Team Meeting", day: "Today", time: "2:00 PM" },
      { title: "Project Deliver", day: "Tomorrow", time: "4:00 PM" },
    ],
  },
  {
    processStatus: "Pending",
    ticket: 1104,
    priority: "Medium",
    events: [{ title: "Party", day: "Tomorrow", time: "5:00 PM" }],
  },
  {
    processStatus: "Complated",
    ticket: 1105,
    priority: "Medium",
    events: [{ title: "Party", day: "Tomorrow", time: "5:00 PM" }],
  },
  {
    processStatus: "Complated",
    ticket: 1106,
    priority: "Medium",
    events: [{ title: "Party", day: "Tomorrow", time: "5:00 PM" }],
  },
  {
    processStatus: "Complated",
    ticket: 1107,
    priority: "Low",
    events: [
      { title: "Cry for Monday Blue", day: "Next Week", time: "10:00 AM" },
    ],
  },
]);

const props = defineProps<{
  calendarData?: CalendarDay;
  initialIndex?: number;
}>();

const emit = defineEmits<{
  (e: "update:activeIndex", value: number): void;
}>();

const activeIndex = ref(props.initialIndex ?? 0);

function setActive(index: number) {
  activeIndex.value = index;
  emit("update:activeIndex", index);
}

const stylePriority = (priority: string) => {
  if (priority === "Hight") {
    return "text-error";
  } else if (priority === "Medium") {
    return "text-primary";
  }
  return "text-warning";
};

const sbItems = ref(["Sprint1", "Sprint2", "Sprint3", "Sprint4"]);
const sbValue = ref("Sprint1");
</script>

<template>
  <MotionConfig :transition="{ duration: 0.7, type: 'spring', bounce: 0.5 }">
    <Motion
      layout
      as="div"
      class="flex w-full max-w-lg flex-col gap-6 overflow-hidden rounded-3xl border bg-muted/50 p-8"
      :animate="{
        height: 'auto',
      }"
    >
      <div class="flex ..">
        <div class="grow-11">
          <TextMorph
            :text="'#' + calendarData[activeIndex]?.ticket"
            class="w-fit font-bold"
            :morph-time="0.5"
            :cool-down-time="0.1"
          />
        </div>
        <div class="grow-1 text-end">
          <USelect v-model="sbValue" :items="sbItems" />
        </div>
      </div>

      <Motion
        v-if="calendarData[activeIndex]?.events"
        :key="'event-container' + Math.random()"
        layout
        as="div"
        class="flex flex-col gap-4"
        :initial="{ x: 10, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
      >
        <Motion
          as="div"
          class="flex items-center gap-2"
          layout
          :initial="{ x: 10, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
        >
          <Icon name="octicon:book" />
          <span class="font-medium"
            >Ticket {{ calendarData[activeIndex]?.ticket }}</span
          >
        </Motion>
        <Motion
          as="div"
          class="flex items-center gap-2"
          layout
          :initial="{ x: 10, opacity: 0 }"
          :animate="{ x: 0, opacity: 1 }"
        >
          <Icon name="octicon:book" />
          <span class="font-medium">Notes</span>
        </Motion>

        <div class="flex flex-wrap gap-4">
          <Motion
            v-for="event in calendarData[activeIndex]?.events"
            :key="event.title + event.time + Math.random()"
            as="div"
            layout
            class="w-full max-w-44 rounded-lg border p-3"
            :initial="{ x: 10, opacity: 0 }"
            :animate="{ x: 0, opacity: 1 }"
          >
            <p class="text-sm font-medium">{{ event.title }}</p>
            <p class="text-xs text-muted-foreground">
              {{ event.day }}, {{ event.time }}
            </p>
          </Motion>
        </div>
      </Motion>
      <USeparator size="md" label="All tickets" />

      <div class="flex flex-wrap gap-3">
        <Motion
          v-for="(item, index) in calendarData"
          :key="item.ticket + '-' + index"
          as="button"
          layout
          class="flex flex-col rounded-2xl border border-border p-3 text-center opacity-100 duration-200 hover:bg-muted-foreground/10"
          :class="
            activeIndex === index ? 'bg-muted-foreground/5 bg-active' : ''
          "
          :while-hover="{ scale: 1.1 }"
          :while-press="{ scale: 0.8 }"
          :transition="{ duration: 0.01 }"
          @click="setActive(index)"
        >
          <span class="font-semibold">{{ item.ticket }}</span>
          <span
            class="text-xs font-medium uppercase duration-200"
            :class="stylePriority(item.priority)"
          >
            {{ item.priority }}
          </span>
          <span class="text-xs font-medium uppercase">{{
            item.processStatus
          }}</span>
        </Motion>
      </div>
    </Motion>
  </MotionConfig>
</template>
<style scoped>
.bg-active {
  box-shadow: #75e6da 0px 3px 9px 3px;
}
</style>
